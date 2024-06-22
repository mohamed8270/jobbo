"use server";

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../mongoose';
import { scrapeJobData } from '../scraper';
import JobModel from '../models/job.model';

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

            jobData = {
                ...scrapedJobData,
                postedHistory: updatedpostedHistory,
                appliedHistory: updatedappliedHistory,
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