import { useState } from "react"

function HoverComponent() {
    const[isHover, setIsHover] = useState(false)

    return (
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`container ${isHover ? '' : ' notActive'}`}>
             {`${isHover ? "Hello there" : ""}`}
        </div>
    )
}

export {HoverComponent}