import React from 'react'
import ImageShow from './ImageShow'
import './ImageList.css'

function ImageList({images}) {
  try{
  const renderedImages = images.map((image)=>{
    return <ImageShow image = {image} key = {image.id}/>;
  });
  return (
    <div className='image-list  '> 
      {renderedImages}
    </div>
  )
}catch{
  return <p>This Is Wrong Word.</p>
}
}
export default ImageList
