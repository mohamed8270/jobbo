// '#jobHighlight div:eq(6) span', '#jobHighlight div:eq(7) span',
// Get job posted day
export function extractPostData($: any){
    if (!$) return;

    const selectors = ['months ago', 'days ago', 'a month ago'];
    const checks = ['#jobHighlight div:eq(8) span', '#jobHighlight div:eq(9) span', '#jobHighlight div:eq(10) span'];
    const checks2 = ['#jobHighlight div:eq(6) span', '#jobHighlight div:eq(7) span'];

    for (const selector of selectors) {
        for (const check of checks) {
            for (const check2 of checks2) {
                const element = $(check).map((index: any, e: any) => $(e).text().trim()).get().join(", ");
                const element2 = $(check2).map((index: any, e: any) => $(e).text().trim()).get().join(", ");
                if (element.includes(selector)) {
                    return element;
                } else if (element == selector) {
                    return selector;
                } else if (element2.includes(selector)) {
                    return element2;
                } 
            }
        }
    }

    return '';
} 

// Get job views 
export function extractViewsData($: any) {
    if (!$) return;

    const selectors = ['Viewed', 'View', 'views'];
    const checks = ['#jobHighlight div:eq(8) span', '#jobHighlight div:eq(9) span', '#jobHighlight div:eq(10) span', '#jobHighlight div:eq(7) span'];

    for (const selector of selectors) {
        for (const check of checks) {
            const element = $(check).map((index: any, e: any) => $(e).text().trim()).get().join(", ");
            if (element.includes(selector)) {
                return element;
            } 
        }
    }

    return '';
}

// Get job views 
export function extractAppliedData($: any) {
    if (!$) return;

    const selectors = ['Applied', ' Applied'];
    const checks = ['#jobHighlight div:eq(8) span', '#jobHighlight div:eq(9) span', '#jobHighlight div:eq(10) span'];

    for (const selector of selectors) {
        for (const check of checks) {
            const element = $(check).map((index: any, e: any) => $(e).text().trim()).get().join(", ");
            if (element.includes(selector)) {
                return element;
            }
        }
    }

    return '';
}

// extract job id
export function extractJobID(data: any) {

    // Split the URL at the '?' character.
    const parts = data.split('?');
    // The first part of the split will contain the numbers.
    const numberPart = parts[0];
    // Extract all numbers using a regular expression.
    const numbers = numberPart.match(/\d+/g);
    // Return the array of extracted numbers.
    return `https://www.foundit.in/seeker/job-apply?id=${numbers}8&autoApply=true` || '';
    
}

// extract URL index
export function extractJobIndexData($: any, i: any) {
    const jobIndex = $('a').map((i: any, el: any) => $(el).attr('href')).get();
    // console.log(jobIndex);
    const output = jobIndex[i];

    return output;
}