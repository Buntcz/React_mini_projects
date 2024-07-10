import { useState } from "react";

function List() {
   const[list,setList] = useState(['Tomato','Cheese','Salami'])
   const[listItem, setListItem] = useState('')

   function handleClick() {
      const insertAt = 0;
      const nextItem = [
        ...list.slice(0, insertAt),

        listItem,

        ...list.slice(insertAt)
      ]
      setList(nextItem)
      setListItem("")
   }


   function handleDelete(targetIndex) {
    const newArray = list.filter((item,index) => index !== targetIndex)
    setList(newArray)
   }

   return (
    <>
    <input type="text" className="ListName"onChange={e => setListItem(e.target.value)} />
    <button type="submit" onClick={() => handleClick()}>Add</button>
    <div>
        <ol className="ListItems">
            {list.map((value,index) => {
              return(  <li key={index}>{value} <button className="deleteButton" onClick={() => handleDelete(index)}>Delete</button> </li> 
              )
            })}
        </ol>
    </div>
    </>
   )
}

export {List}