import { useState } from "react"
import { imageData } from "./imageData"

function Slideshow(){
  const[image,setImage] = useState(0)
  const images = imageData
  function changeImage() {
    if(image === 2) {
         setImage(0)
    } else (
        setImage(image + 1)
    )
  }

  setInterval(changeImage,5000)

    return (
        <div className="image">
            <img src={images[image]}  className="slide"/>
        </div>
    )
}

export {Slideshow}