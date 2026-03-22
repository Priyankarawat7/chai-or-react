import React, { useEffect, useState } from 'react'

function Counter2() {

   // 5.Create a counter and log its value in console every time it changes using useEffect.
     let [count,setCount]=useState(0)

     let incr=()=>{

        //count++
        setCount(count+1);
        console.log(count);
        

     }

     let dec=()=>{

        count--
         setCount(count-1);
         console.log(count);
     }

     useEffect(()=>{
        console.log("hwllo");
        

     },[count])

  return (
  <>
  
    <div className="bg-orange-400 h-screen flex items-center justify-center" >
      <h2 className='flex me-5'>Count: {count}</h2>
        <button onClick={incr} className='bg-white p-6 rounded-xl shadow-lg flex gap-5 me-5'>Increment</button>
        <button onClick={dec} className='bg-white p-6 rounded-xl shadow-lg flex gap-3'>Decrement</button>

    </div>
    </>
  )
}

export default Counter2
