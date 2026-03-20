import React, { useState,useCallback ,useEffect, useDebugValue} from 'react'

function Project2() {

  /*
  useEffect hooks
  useEffect is a React Hook that lets you synchronize a component with an external system.
  never compare useeffect array with callback 

  */
  const [length, setLength]=useState(8)
  const[numberAllowed,setNumberAllowed]=useState(false)
  const[charAllowed, setCharAllowed]=useState(false)
  const[password,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)
    {
      str+="0123456789"
    }
    if(charAllowed)
    {
      str+="!@#$%^&*_~"

    }

    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random() * str.length +1)
      // 0,1,2,3,4,5,6,7,8,9,10,11,12,13
      pass +=str.charAt(char)
      // value aa jaegi Alphabet mai
      
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed])
  //if I give password (infinite loop occured)
  //so use Setpassword, or nothing
   // useCallback is a React Hook that lets you cache a function definition between re-renders.

 // passwordGenerator()
   //Too many re-renders. 
   // React limits the number of renders to prevent an
   //  infinite loop. (so that i use useeffect for rendering)
  useEffect(()=>{
      passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  

  return (
    <>
      <h1 className='text-4xl text-center'>Password generator</h1>
        
        <div className='bg-yellow-600 min-h-screen flex flex-col items-center justify-center gap-6'>
        <div className='flex  shadow rounded-lg overflow mb-4 bg-gray-400'>
        <input 
        type='text'
        value={password}
        className='outline-none w-64 py-1 px-3'
        placeholder='password'
        readOnly
         />
     
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
           </div>
      
  
    <div className="flex text-sm gap-x-2">
       <div className="flex items-center gap-x-1">
        <input type="range"
        min={6} max={50} value={length} 
        className='cursor-pointer' 
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label>Length{length}</label>
       </div>
        <div className="flex text-sm gap-x-2">
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput' onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
        <label>numbers</label>
        </div>

        <div className="flex text-sm gap-x-2">
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={()=>{setCharAllowed((prev)=>!prev)}} />
        <label>Characters</label>
        </div>

    </div>
      </div>
    </>
  )
}

export default Project2
