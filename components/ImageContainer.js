import Image from "next/image";

export default function ImageContainer({image, index}){

  return(
    <>
      <Image
        priority = {true}
        unoptimized
        key = {index}
        src = {image}
        width='0'
        height='0'
        alt = {image}
        style={{width: '100%', height: 'auto'}}
      />
    </>
  )
}
