import { useState } from "react"
import { searchList } from "./searchList"

function Filter() {
    const [colors,setColors] = useState(searchList)
    const[searchValue,setSearchValue] = useState('')

    function handleClick() {
        if(searchValue === '') {
            setColors(searchList);
            return;
        }
        const filteredSearch = colors.filter((item) => {
            if(item.toLowerCase().includes(searchValue.toLowerCase())) {
                return item;
            }
        })
        setColors(filteredSearch)
        console.log(colors)
    }

    return(
        <div className="Container">
            <input type="text" onChange={e => setSearchValue(e.target.value)}/>
            <button type="submit" onClick={() => handleClick()} >Search</button>
            <div className="list">
                <ul>
                    {colors.map((value,index) => {
                        return(
                            <li key={index}>{value}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export {Filter}