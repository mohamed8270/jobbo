import JobModel from "@/lib/models/job.model";
import { connectToDB } from "@/lib/mongoose";
import { generateEmailBody, sendMail } from "@/lib/nodemailer";
import { scrapeJobData } from "@/lib/scraper";
import { getEmailNotifyType } from "@/lib/utils/email";
import { NextResponse } from "next/server";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
    try {
        connectToDB();

        const jobs = await JobModel.find({});

        if(!jobs) throw new Error('Jobs not fetched');


        // ================ 1 SCRAPE LATEST JOB DATA AND UPDATE DB
        const updatedJobs = await Promise.all(
            jobs.map(async (currentJob) => {
                const scrapedJob = await scrapeJobData(currentJob.url);
                if(!scrapedJob) return;

                const updatedpostedHistory: any = [
                    ...currentJob.postedHistory,
                    {posted: scrapedJob.jobPostedValue},
                    
                ]
    
                const updatedappliedHistory: any = [
                    ...currentJob.appliedHistory,
                    {apply: scrapedJob.jobAppliedValue},
                ]
    
                const updatedviewsHistory: any = [
                    ...currentJob.viewsHistory,
                    {views: scrapedJob.jobViewsValue}
                ]
    
                const jobData = {
                    ...scrapedJob,
                    postedHistory: updatedpostedHistory,
                    appliedHistory: updatedappliedHistory,
                    viewsHistory: updatedviewsHistory,
                    jobPostedValue: scrapedJob.jobPostedValue,
                    jobAppliedValue: scrapedJob.jobAppliedValue,
                    jobViewsValue: scrapedJob.jobViewsValue,
                };

                // =========== UPDATE THE JOB IN MONGODB
                const updatedJob = await JobModel.findOneAndUpdate(
                    {url: jobData.url},
                    jobData,
                );

                //============ 2 CHECK EACH JOB DATA AND SEND MAIL
                const emailNotifyType = getEmailNotifyType(scrapedJob, currentJob);

                if(emailNotifyType && updatedJob.users.length > 0 ) {
                    const jobInfo = {
                        jobName: updatedJob.jobName,
                        url: updatedJob.url,
                    };

                    // email content
                    const emailContent = await generateEmailBody(jobInfo, emailNotifyType);
                    // get array of users email
                    const userEmails = updatedJob.users.map((user: any) => user.email);
                    // sent email notification
                    await sendMail(emailContent, userEmails);
                }

                return updatedJob;
            })
        );

        return NextResponse.json({
            message: "OK",
            data: updatedJobs,
        });
    } catch (error: any) {
        throw new Error(`Failed to get jobs: ${error.message}`);
    }
}