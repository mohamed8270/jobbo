export function isValidJobUrl(url: string) {
    try {
        const parsedUrl = new URL(url);
        const hostname  = parsedUrl.hostname;

        if(hostname.includes('foundit.in') || hostname.includes('foundit') || hostname.includes('foundit.')) {
            return true;
        }
    } catch (error) {
        return false;
    }

    return false;
}