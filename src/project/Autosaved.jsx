import React, { useEffect, useState } from 'react'

function Autosaved() {
 /* 🔄 2. useEffect (Side Effects Thinking)
👉 Question: Auto Save Input
You have a text input:

When user types, wait for 2 seconds
Then show “Saved”

Twist:

If user keeps typing, timer should reset
Only save when user stops typing

What this tests:
Understanding of side effects
Cleanup logic (this is where most people fail) */

    let [saved,setSaved]=useState(false);
    let [text,Settext]=useState('')

    useEffect(()=>{
    if(!text) return
         setSaved(false);

   let timer= setTimeout(() => {
        //console.log("AutoSaved",setSaved);
        setSaved(true)  //after 2 second -> saved
    
   }, 2000);

   return()=>clearTimeout(timer)

    },[text])

  return (
    <>
    <div className='bg-yellow-400 h-screen flex flex-col items-center justify-center'>
        <input onChange={(e)=>Settext(e.target.value)} className='bg-white py-2 px-3' type="text" name="" id=""/>{saved && <p>Saved</p>}
        <button className='bg-white mt-3 py-2 px-3 rounded' type="button">button</button>
    </div>
      
    </>
  )
}

export default Autosaved
