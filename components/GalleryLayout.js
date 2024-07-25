import ImageContainer from "./ImageContainer"


function getImages(content){
  if(content===undefined){
    console.log("content is undefined!")
    return [];
  }
  const imagesData = content.map((imageName) => {
    const pathDirectoryToImage = '/images';
    const src=pathDirectoryToImage+'/'+imageName;
    return src;
  })
  return imagesData;
}

export default function GalleryLayout({content}){
  const imagesSrc = getImages(content);
  const imageContainers = imagesSrc.map((image, index) => {
    return(
        <ImageContainer image = {image} key = {index}/>
    )
  })


  return(
    <>
      {imageContainers}    
    </>
  )

}
