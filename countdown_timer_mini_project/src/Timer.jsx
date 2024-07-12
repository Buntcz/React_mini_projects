import { useState,useEffect } from "react"

function Timer() {
    const[time, setTime] = useState(0)

  let seconds = function() {
       let sToWait = prompt("enter the minutes you want to wait")
       let initialTime = sToWait * 60;
       setTime(initialTime);
    
    }

    useEffect(() => {
        const timer = setTimeout(function() {
            console.log('minus:', time)
            setTime(time - 1)
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [time])
    
    return(
    <div className="container">
        <h1 className="Timer">
            Time left: {`${Math.floor(time / 60)}`.padStart(2,0)}:{`${time % 60}`.padStart(2,0)}
        </h1>
        <button className="setTimer" onClick={() => seconds()}>set timer</button>
    </div>
    )
}

export {Timer}