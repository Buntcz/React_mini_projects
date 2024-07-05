import { useState } from "react"

function ToggleButton() {
   const[buttonState, setButtonState] = useState(false)

   let buttonClass = "toggleButton"
   let pClass = "toggleP"

   function valueSwitch() {
    if(buttonState === true) {
        setButtonState(false)
    } else if(buttonState === false) {
        setButtonState(true)
    }
   }
  


   if(buttonState === true) {
    buttonClass += " on"
    pClass += " on"
   } else if(buttonState === false) {
    buttonClass += " off"
    pClass += " off"
   }

    return (
    <>
   <div className="buttonContainer">
    <button className={buttonClass} onClick={valueSwitch}> <p className={pClass}>⬤</p> </button>
   </div>
    </>
  )
}

export {ToggleButton}