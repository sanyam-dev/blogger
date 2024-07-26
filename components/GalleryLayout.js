// import { getViewPortDims } from "../lib/getViewPortDims";
import {getImages, distributeImage} from "../lib/images";
import GalleryColumn from "./GalleryColumn";

export default function GalleryLayout({content}){
  const imagesSrc = getImages(content);
  const imageGridArray = distributeImage(imagesSrc);
  // const {viewportheight, viewportwidth} = getViewPortDims(); 
  // console.log(viewportheight, viewportwidth);
  return(
    <>
    <div className="grid grid-cols-2 gap-4">
      <GalleryColumn imageArray={imageGridArray[0]}/>
      <GalleryColumn imageArray={imageGridArray[1]}/>
      {/* <GalleryColumn imageArray={imageGridArray[2]}/> */}
    </div>   
    </>
  )
}
