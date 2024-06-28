import { Jobs } from "@/types";

// -------- jobs view, apply, high pay, low pay -----------------------------------

// job viewed extract
export function extractJobviewsAverage(jobsData: Jobs[]): number {
    if (!jobsData || !jobsData.length) return 0; // Handle empty or undefined data
    let totalViews = 0;
  
    for (const jobData of jobsData) {
      const viewValue = jobData.jobViewsValue; // Access jobViewsValue directly
      if (viewValue && viewValue >= 30) { // Check for existence and minimum value
        totalViews += viewValue;
      }
    }
  
    return totalViews;
  }
  

// job applied extract
export function extractJobappliedAverage(jobsData: Jobs[]) {
    if(!jobsData || !jobsData.length) return 0;
    let totalapply = 0;

    for(const jobdata of jobsData) {
        const applyvalue = jobdata.jobAppliedValue;
        if(applyvalue && applyvalue >= 50) {
            totalapply += applyvalue;
        }
    }

    return totalapply || 0;
}

// job high paid data extract
export function extractJobHighpay(jobsdata: Jobs[]) {
    if(!jobsdata || !jobsdata.length)  return 0;
    let totalamount = '0';
 
    for(const jobdata of jobsdata) {
        var highvalue = Number(jobdata.jobSalary.replace(/\D/g,''));
        if(highvalue && highvalue >= 50000) {
            totalamount = jobdata.jobSalary;
        }
    }
    return totalamount || '0';
}

// job low paid data extract
export function extractJoblowpay(jobsdata: Jobs[]) {
    if(!jobsdata || !jobsdata.length)  return 0;
    let totalamount = '0';
    
    for(const jobdata of jobsdata){
        var lowvalue = Number(jobdata.jobSalary.replace(/\D/g,''));
        if(lowvalue <= 50000) {
            totalamount = jobdata.jobSalary;
        }
    }
    return totalamount || '0';
}





// ------- jobs data count per job ------------------------------------

// job views count data extract
export function extractJobviewsCount(data: any) {
    if(!data) return 0;
    let totalcount = 0;
    // console.log(data);
    {data?.map((jobsdata: any) => {
        var viewcountarr = [jobsdata.jobViewsValue];
        for(var i=0; i <= viewcountarr.length; i++){
            if(viewcountarr[i] >= 30) {
                totalcount += i+1;
            }
        }
    })}
    return totalcount || 0;
}

// job applyncount data extract
export function extractJobapplyCount(data: any) {
    if(!data) return 0;
    let totalcount = 0;
    // console.log(data);
    {data?.map((jobsdata: any) => {
        var applycountarr = [jobsdata.jobAppliedValue];
        for(var i=0; i <= applycountarr.length; i++){
            if(applycountarr[i] >= 30) {
                totalcount += i+1;
            }
        }
    })}
    return totalcount || 0;
}



// job percentage data extract
export function extractPercent(data: any) {
    
}

// popularity score 
export function extractPopularity(data: any) {
    let views = data.jobViewsValue;
    let posted = data.jobPostedValue === 0 ? 0 : data.jobPostedValue;
    let applied = data.jobAppliedValue;
    // console.log(views,posted,applied);
    const k = 2;

    const kConstant = k * applied;
    const first = views + kConstant;
    const second = posted + 1;

    const popularityscore = first / second;
    return popularityscore.toFixed(4) || 0;
}