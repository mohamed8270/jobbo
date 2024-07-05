import Image from "next/image";

export function descriptionCheck(txt: string) {
    var lines = txt.trim().split(/\s+/);
    console.log(`Check des ${lines.length}`);
    if(lines.length > 50) {
        return 'text-justify';
    } else {
        return 'text-start';
    }
}

// support button UI
interface Props {
    txt: any,
  }
  
  export function SupportBtn({txt}: Props) {
    return <button className='h-[50px] w-[50px] bg-jgreen bg-opacity-5 rounded-full flex justify-center items-center'>
            <Image src={txt} alt={txt} height={30} width={30} />
          </button>  
  }