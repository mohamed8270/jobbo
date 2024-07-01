export function descriptionCheck(txt: string) {
    var lines = txt.trim().split(/\s+/);
    console.log(`Check des ${lines.length}`);
    if(lines.length > 50) {
        return 'text-justify';
    } else {
        return 'text-start';
    }
}