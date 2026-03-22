import React, { useState } from 'react'

function Input() {
   // 3.Create an input field and display its value live below it.
    let [value, setValue]=useState('');
    let [sumbittedvalue,setSubmitevalue]=useState('')

    const handlesubmit=()=>{
       
       setSubmitevalue(value);

        
    }
  return (
    <>
    <div className="bg-yellow-400 h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-lg flex gap-3">
        <input type="number"
         placeholder='enter your value' 
         onChange={(e)=> setValue(e.target.value)} 
         className='bg-white  py-4 px-4' />
            <button onClick={handlesubmit}>Submit</button>
             </div>
   
        {sumbittedvalue && (
             <p>Your Entered: {sumbittedvalue}</p>
        )
        }

         </div>
   
    
      
    </>
  )
}

export default Input
