import ImageContainer from "./ImageContainer"

export default function GalleryColumn({imageArray}){
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