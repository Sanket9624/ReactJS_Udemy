import React from 'react'


function ImageShow({image}) {
  return (
    <div>
     <img src = {image.urls.small_s3} alt = {image.alt_description}></img>
    </div>
  )
}

export default ImageShow
