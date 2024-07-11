import { useState } from "react"

function Tabs() {
   const[toggleTab, setToggleTab] = useState(1)

   function changeTab(index) {
    setToggleTab(index)
   }

    return(
        <div className="container">
            <div className="Tabs">
                <div className={`tab ${toggleTab === 1 ? ' active' : ''}`} onClick={() => changeTab(1)}>1</div>
                <div className={`tab ${toggleTab === 2 ? ' active' : ''}`}onClick={() => changeTab(2)} >2</div>
                <div className={`tab ${toggleTab === 3 ? ' active' : ''}`} onClick={() => changeTab(3)}>3</div>
            </div>
            <div className="Contents">
            <div className={`content ${toggleTab === 1 ? ' active' : ''}`}>content 1</div>
            <div className={`content ${toggleTab === 2 ? ' active' : ''}`}>content 2</div>
            <div className={`content ${toggleTab === 3 ? ' active' : ''}`}>content 3</div>
            </div>
        </div>
    )
}

export {Tabs}