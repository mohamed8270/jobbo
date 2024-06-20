
// job viewed average extract
export function extractJobviewsAverage(data: any) {
    if(!data) return 0;
    let totalviews = 0;

    {data?.map((jobdata: any) => {
        var viewarr = [jobdata.jobViewsValue];
        for(var i=0; i <= viewarr.length; i++) {
            if(viewarr[i] >= 30) {
                totalviews += viewarr[i];
            }
        }
    })}
    return totalviews || 0;
}

// job applied average extract
export function extractJobappliedAverage(data: any) {
    if(!data) return 0;
    let totalapply = 0;

    {data?.map((jobdata: any) => {
        var applyarr = [jobdata.jobAppliedValue];
        
        for(var i=0; i <= applyarr.length; i++) {
            if(applyarr[i] >= 50) {
                totalapply += applyarr[i];
                // console.log(applyarr[i]);
            }
        }
        // console.log(totalapply);
    })}
    // console.log(totalapply);
    return totalapply || 0;
}

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

// job high paid data extract
export function extractJobHighpay(data: any) {
    if(!data)  return 0;
    let totalamount = 0;
    {data?.map((jobsal: any) => {
        var highpayarr = [jobsal.jobSalary.replace(/\D/g,'')];
        for(var i=0; i <= highpayarr.length; i++) {
            if(highpayarr[i] >= 50000) {
                totalamount += highpayarr[i];
            }
        }
    })}
    return totalamount || 0;
}