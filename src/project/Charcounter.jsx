//Build a character counter for a textarea using useState.

import React, { useState } from 'react'

function Charcounter() {
    let [countChar,setCountchar]= useState('');

    // let counts=(()=>{

    //    // setCount(count+=count);
    //     console.log(count);
        

    // })

  return (
    <>
    <div className="bg-pink-300 h-screen flex flex-col  items-center justify-center">
            <h1>Character Counter</h1>
        <textarea onChange={(e)=>setCountchar(e.target.value.length)} className='bg-white'></textarea>
        <h1>Count:{countChar}</h1>


    </div>  
    </>
  )
}

export default Charcounter
