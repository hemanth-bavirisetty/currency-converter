
import {useEffect, useState} from 'react'

export default function useCurrencyInfo(currency) {
   console.log(currency)

    const [curInfo,setCurInfo] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setCurInfo(res[currency]))
    },[currency])
    console.log(curInfo)
    return curInfo 

}
