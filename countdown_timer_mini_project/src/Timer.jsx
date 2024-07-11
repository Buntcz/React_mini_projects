import { useState } from "react"

function Timer() {
  let seconds = function() {
       let sToWait = prompt("enter the minutes you want to wait")
       console.log(sToWait);
    }
    let initialTime = seconds * 60

    const[timer, setTimer] = useState(initialTime)
    return(
    <div className="container">
        <h1 className="Timer"></h1>
        <button className="setTimer" onClick={() => seconds()}>set timer</button>
    </div>
    )
}

export {Timer}