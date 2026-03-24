import React, { useEffect, useState } from 'react'

function Clock() {
//     5.Build a live clock using useEffect that updates every second.
// 👉 Make sure it doesn’t create multiple intervals

    const[hour,setHour]=useState(0);
    const[minute,setMinute]=useState(0);
    const[second,setSecound]=useState(0);

    useEffect(()=>{

       const clock= setInterval(() => {
             let now=new Date();
            //  console.log(date.toLocaleDateString);

          
           
           

            setHour(now.getHours())
            setMinute(now.getMinutes())
            setSecound(now.getSeconds())
        }, 1000);

        return()=>{
            clearInterval(clock)
        }

        //setHour(hour,minute,second);
       
        

    },[])


  return (
    <>
     <div className='bg-olive-700 h-screen flex flex-col items-center justify-center'>
      
    <h1 className='text-white text-3xl'>Your local Time</h1>
    <h3 className='bg-white py-3 px-10 mt-5'>{hour}:{minute}:{second}</h3>

    </div>

      
    </>
  )
}

export default Clock
