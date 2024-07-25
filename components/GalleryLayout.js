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

function distributeImage(imageSrc){
  let arr = [[], [], []];
  let count = 0, i = 0;
  while(count < imageSrc.length){
    arr[i].push(imageSrc[count]);
    count++;
    if(count == imageSrc.length){
      break;
    }
    i++;
    if(i == 3) i=0;
  }
  return arr;
}

function GalleryColumn({imageArray}){
  
  return(
    <div className = 'grid gap-4'>
        {
          imageArray.map((image, index)=>{
            return(
              < ImageContainer 
                image = {image}
                key = {index}
              />
            )
          })
        }
        
      
    </div>
  )
}

export default function GalleryLayout({content}){
  const imagesSrc = getImages(content);
  const imageGridArray = distributeImage(imagesSrc);
  return(
    <>
    <div className="grid grid-cols-2  gap-4 md:grid-cols-3">
      <GalleryColumn imageArray={imageGridArray[0]}/>
      <GalleryColumn imageArray={imageGridArray[1]}/>
      <GalleryColumn imageArray={imageGridArray[2]}/>
    </div>   
    </>
  )
}
