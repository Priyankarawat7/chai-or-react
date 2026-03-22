//3.Create a timer that increments every second using useEffect.
import React, { useEffect, useState } from 'react'

function Timer() {
    let [timer,Settimer]=useState(0);
    useEffect(()=>{
      const id=  setInterval(() => {

      Settimer(prev=> prev+1);
        
    }, 1000);
    return()=>{
        clearInterval(id)
    }


    },[])



  return (
    <>
    <div className="bg-green-300 h-screen flex items-center justify-center">

        <h1>Timer:{timer}</h1>

    </div>

      
    </>
  )
}

export default Timer
