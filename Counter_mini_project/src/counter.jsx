import { useState } from "react";

export default function Counter() {
    const[counter,setCounter] = useState(0)

    function increaseCounter() {
        setCounter(counter + 1);
    }

    return ( 
        <div className="Container">
         <div className="counterContainer">
            <h2>{counter}</h2>
         </div>
         <button className="increaseCounter" onClick={() => increaseCounter()}>Increase</button>
        </div>
    )
}