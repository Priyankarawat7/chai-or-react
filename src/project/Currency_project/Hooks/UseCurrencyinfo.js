import React, { useEffect, useState } from 'react'

function UseCurrencyinfo(currency) {
    let [data,setData]= useState({})

    useEffect(()=>{
    /*the component is mount and unmount, lifecycle event  triggered is using useEffect Hook
    */
   fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
   .then((res)=> res.json())
   .then((res)=> setData(res.rates))
   console.log(data);
   

    },[currency])//dependencies
    console.log(data);
    return data
    

}

export default UseCurrencyinfo;

