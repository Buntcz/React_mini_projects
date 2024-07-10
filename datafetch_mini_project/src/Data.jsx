import { useState,useEffect } from "react"
import { apiKey } from "./APIkey"

const URL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`

function Data() {
   const [temp, setTemp] = useState(0)

   useEffect(() => {
    const fetchData = async() => {
        const result = await fetch(URL)
        result.json().then(json => {
            setTemp(json.current.temp_c)
        })
    }
    fetchData()
   }, [])

    return (
        <h1>{`The temperature in London is ${temp} degrees in celcius`}</h1>
    )
}

export {Data}