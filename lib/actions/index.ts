import axios from "axios";

export async function getJobsData() {
    try {
        const jobDatasurl = String(process.env.JOBS_DATA_URL);
        const joboutput = await axios.get(jobDatasurl);
        console.log(joboutput);
        return joboutput;
    } catch (error) {
        throw new Error(`${error}`);
    }
} 