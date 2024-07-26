export function getImages(content){
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

export function distributeImage(imageSrc){
  let arr = [[], []];
  let count = 0, i = 0;
  while(count < imageSrc.length){
    arr[i].push(imageSrc[count]);
    count++;
    if(count == imageSrc.length){
      break;
    }
    i++;
    if(i == 2) i=0;
  }
  return arr;
}