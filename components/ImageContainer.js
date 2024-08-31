import Image from "next/image";

export default function ImageContainer({image, index}){

  return(
    <div key = {index}>
      <Image
        className="h-auto w-full rounded-lg object-cover object-center"
        rel="preload"
        priority = {true}
        unoptimized
        key = {index}
        src = {image}
        width={'0'}
        height={'0'}
        alt = {image}
      />
    </div>
  )
}
