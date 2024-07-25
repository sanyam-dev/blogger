import Image from "next/image";

export default function Footer(){
  return(
    <div id='footer-wrapper'
      className="sm:overflow-hidden">
      <Image 
        src = '/img/starry-night.jpg'
        width = {0}
        height = {0}
        rel="preload"
        priority = {true}
        unoptimized
        alt = 'starry night'
        style={{width: '100%'}}
      />
    </div>
  )
}