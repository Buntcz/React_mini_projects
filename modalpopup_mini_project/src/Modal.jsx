import { useState } from "react"
import {createPortal} from 'react-dom'


function Modal() {
  const [isActive, setIsActive] = useState(false)
   

   function handleActive() {
    if(isActive === false) {
        setIsActive(true)
    } else if(isActive === true) {
        setIsActive(false)
    }
   }

   return createPortal(
    <>
    <button className="Open_button" onClick={handleActive}>Open Modal</button>
    <div className={`modalpopup ${isActive ? 'active' : ''}`}>
        <h1 className="modalHeader">Modal</h1>
        <p>modal text</p>
        <button className="closeButton" onClick={handleActive}>Close Modal</button>
    </div>
    </>,
    document.getElementById('portal')
   )

}

export{ Modal }