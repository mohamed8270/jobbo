
// job viewed average extract
export function extractJobviewsAverage(data: any) {
    if(!data) return;
    for(const jobdata of data){
        const jobview = jobdata.jobViewsValue;
        let totalviews = 0;

        if(jobview){
            totalviews += jobview;
        }
        return totalviews;
    }
}