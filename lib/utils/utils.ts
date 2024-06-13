// function to remove space and \n
export function extractJobDataSpace(data: any) {
    if(!data) return;

    const res = data.text().trim();
    // const output = res.replace(/[\r\n]+/gm, "").replace(/\s+/g, ' ');
    const output = res.replace(/[\r\n]+/gm, "").replace(/\s+/g, " ").replace(/<(?:.|\n)*?>/g, ", ");
    return output;
};

// function to remove space and replace with ','
export function extractJobDataComma(data: any) {
    if(!data) return;

    const res = data.text().trim();
    const lines = res.split(/\n/);
    const output = lines.map((line: any) => line.trim()).filter((line: any) => line.length > 0).join(', ');
    return output;
};

// separate each tag with comma
export function extractCommaSeparated($: any,data: any) {
    if(!$) return;

    const output = $(data).map((index: any, element: any) => $(element).text().trim()).get().join(", ");
    return output.match(/\b\w+\b/g);
} 

// remove space function
export function extractWhiteSpace(data: any) {
    if(!data) return;
    const output = data.replace(/\s/g, "-");
    console.log(output);
    return output;
}