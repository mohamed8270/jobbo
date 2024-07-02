import fse from 'fs-extra';

export async function readHTMLContent(path: string) {
    try {
        const data = await fse.readFile(path, 'utf8');
        return data;
    } catch (error) {
        console.log(error);
        return 'Email Error';
    }
}