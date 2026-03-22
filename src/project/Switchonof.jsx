import React, { useState } from 'react'

function Switchonof() {
  //2.Build a toggle switch (ON/OFF) using useState.
    let [color, setColor] = useState('orange');

    // let switchon=()=>{

    //     setSwitch()




    // }

    //  let switchof=()=>{
    //     setSwitch('black')

    // }

  return (
    <>
    <div className=" h-screen duration-200 flex justify-center items-center" style={{backgroundColor:color}}>
      

       <div className="bg-white">
        <button onClick={()=>setColor('yellow')}  className='bg-yellow-300 py-3 px-4 m-4'>Switch On</button>
        <button onClick={()=>setColor('black')} className='bg-black text-white py-3 px-4 m-4'>Switch off</button>

       </div>
       
    </div>
    

      
    </>
  )
}

export default Switchonof
