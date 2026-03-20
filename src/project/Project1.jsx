import React, { useState } from 'react'

function Project() {
    const[color,Setcolor]=useState('olive')
  return (
    <div>
        <h1 className='text-center font-medium text-2xl'>Bg Changer</h1>

        <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        </div>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-5  shadow-lg bg-white px-3 py-2 rounded-xl'>
       {/* onclick wants function  */}
        <button onClick={()=>Setcolor("red")} className=' outline-none px-4 py-2 rounded text-white shadow-lg' style={{backgroundColor:"red"}}>red</button>
        <button onClick={()=>Setcolor('green')} className=' outline-none px-4 py-2 rounded text-white shadow-lg' style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>Setcolor('black')} className=' outline-none px-4 py-2 rounded text-white shadow-lg' style={{backgroundColor:"black"}}>black</button>
        <button onClick={()=>Setcolor('yellow')} className=' outline-none px-4 py-2 rounded text-black shadow-lg' style={{backgroundColor:"yellow"}}>yellow</button>
        <button onClick={()=>Setcolor('orange')} className=' outline-none px-4 py-2 rounded text-white shadow-lg' style={{backgroundColor:"orange"}}>orange</button>
        <button onClick={()=>Setcolor('pink')} className=' outline-none px-4 py-2 rounded text-black shadow-lg' style={{backgroundColor:"pink"}}>pink</button>
        <button onClick={()=>Setcolor('purple')} className=' outline-none px-4 py-2 rounded text-white shadow-lg' style={{backgroundColor:"purple"}}>purple</button>
         </div>
        </div>
      
      
    </div>
  )
}

export default Project
