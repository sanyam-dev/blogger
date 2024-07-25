import Image from "next/image";

export default function ImageContainer({image, index}){

  return(
    <div key = {index}>
      <Image
        className="h-auto max-w-full rounded-lg object-cover object-center"
        rel="preload"
        priority = {true}
        unoptimized
        key = {index}
        src = {image}
        width={'0'}
        height='0'
        alt = {image}
        style={{width: '100%', height: 'auto'}}
      />
    </div>
  )
}
