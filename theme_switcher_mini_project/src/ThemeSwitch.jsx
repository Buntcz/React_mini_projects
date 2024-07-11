import { useState } from "react"

function ThemeSwitch() {
   const [darkTheme, setDarkTheme] = useState(false)

   function changeTheme() {
   if(darkTheme === false) {
    setDarkTheme(true)

   } else if(darkTheme === true) {
    setDarkTheme(false)
   }
   }

    return (
       <div className={`background ${darkTheme ? ' dark' : " light"}`}>
        <h1 className={`text ${darkTheme ? ' dark' : " light"}`}>{`The theme is ${darkTheme ? 'Dark' : "Light"}`}</h1>
        <button className={`switch ${darkTheme ? ' dark' : ' light'}`} onClick={() => changeTheme()}> Switch theme</button>
       </div>
    )
}

export {ThemeSwitch}