"use server";

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../mongoose';
import { scrapeJobData } from '../scraper';
import JobModel from '../models/job.model';
import { User } from '@/types';
import { generateEmailBody, sendMail } from '../nodemailer';

export async function scrapeAndStoreJobData(joburl: string) {
    if(!joburl) return true;

    try {
        connectToDB();
        const scrapedJobData = await scrapeJobData(joburl);

        if(!scrapedJobData) return;

        let jobData = scrapedJobData;

        const existingJob = await JobModel.findOne({url: scrapedJobData.url});

        if(existingJob) {
            const updatedpostedHistory: any = [
                ...existingJob.postedHistory,
                {posted: scrapedJobData.jobPostedValue},
                
            ]

            const updatedappliedHistory: any = [
                ...existingJob.appliedHistory,
                {apply: scrapedJobData.jobAppliedValue},
            ]

            const updatedviewsHistory: any = [
                ...existingJob.viewsHistory,
                {views: scrapedJobData.jobViewsValue}
            ]

            const postedDiff = scrapedJobData.jobPostedValue - existingJob.jobPostedValue;
            const appliedDiff = scrapedJobData.jobAppliedValue - existingJob.jobAppliedValue;
            const viewDiff = scrapedJobData.jobViewsValue - existingJob.jobViewsValue;

            jobData = {
                ...scrapedJobData,
                postedHistory: updatedpostedHistory,
                appliedHistory: updatedappliedHistory,
                viewsHistory: updatedviewsHistory,
                jobPostedValue: existingJob.jobPostedValue + postedDiff,
                jobAppliedValue: existingJob.jobAppliedValue + appliedDiff,
                jobViewsValue: existingJob.jobViewsValue + viewDiff,
            }
        }

        const newJobData = await JobModel.findOneAndUpdate(
            {url: scrapedJobData.url},
            jobData,
            {upsert: true, new: true},
        )

        revalidatePath(`/jobs/${newJobData._id}`);

        
    } catch (error) {
       throw new Error(`${error}`);
    }
}

// get all jobs data from mongodb
export async function getAllJobsData() {
    try {
        connectToDB();
        const output = await JobModel.find();

        return output;
    } catch (error) {
        throw new Error(`${error}`);
    }
}

// get jobs by id
export async function getJobsDetails(id: string) {
    try {
        connectToDB();

        const jobs = await JobModel.findOne({_id: id});
        if(!jobs) return null;
        return jobs;
    } catch (error) {
        throw new Error(`${error}`);
    }
}

// adding user email to job data
export async function addUserEmailtoJob(jobId: string, userEmail: string) {
    try {
        const job = await JobModel.findById(jobId);

        if(!job) return;

        const userExists = job.users.some((user: User) => user.email === userEmail);

        if(!userExists) {
            job.users.push({email: userEmail});
            await job.save();
            const emailContent = await generateEmailBody(job, "WELCOME");
            await sendMail(emailContent, [userEmail]);
        }
    } catch (error) {
        throw new Error(`${error}`);
    }
}