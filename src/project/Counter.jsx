
import React, { useState } from 'react'

function Counter() {
  let [counter,SetCounter] = useState(0)
//   useState se 2 chize milti h array ke format mai [value,function]
// values update 
// saare variables ko batches mai bhjta h using fibre algo.

    const incval=()=>{

        if(counter>=20)
        {
            alert(' not greater than 20')
            
        }     

        else{
              SetCounter(counter+1)
              console.log(counter);
              

        }
        console.log('clicked',counter);
        counter=counter+1



     
      
  }

    const decval=()=>{

        if(counter<=0)
        {
           alert('not less than 0')
        }
        else{

             SetCounter(counter-1);
        }

    // counter=counter-1;

        /* Interview question what is the answer
      SetCounter((preCounter)=>preCounter+1)
       SetCounter((preCounter)=>preCounter+1)
       SetCounter((preCounter)=>preCounter+1)
       SetCounter((preCounter)=>preCounter+1) incre 4*/ 
   
    
  }

  const Handleclick=()=>{

    SetCounter(0);

    

  }

  return (
    <>
     <div className='bg-orange-400 h-screen flex flex-col items-center justify-center"'>

     
    <h1>Chai or react</h1> <h2>Counter value: {counter} </h2>
    <div className="flex ">
      <button onClick={incval} className='bg-white p-3 rounded-xl shadow-lg   gap-5 me-5'>Increase value</button>
      <button onClick={decval} className='bg-white p-3 rounded-xl shadow-lg  gap-5 me-5'> Decrease value </button>
      <button onClick={Handleclick} className='bg-white p-3 rounded-xl shadow-lg  gap-5 me-5'>Reset</button>
     

    </div>
     <p>footer {counter}</p>
    </div>
    </>
  )
}

export default Counter










// function Counter() {

//        // in javascript get element problem
//   // at a time react can do multiple task
// //right now it's Ui updation problem 
// // using hooks the data will update
// // useState,useEffect

//   let counter=15;

//   const incval=()=>{
//    counter++

//    console.log('clicked',counter);
   
    

//   }
//   const decval=()=>{

//     counter--;
//     console.log('decs values',counter);
    
//   }
//   return (
//     <>
//     {/* <Chai/>
//    <h1>{username} </h1> */}
//    <h1>Chai or react</h1>
//    <h2>Counter value: {counter}</h2>

//    <button onClick={incval}>Increase value {counter}</button>
   
//    <button onClick={decval}> Decrease value {counter}</button>
//       <p>footer {counter}</p>
//     </>
  
//   )
 
// }

// export default Counter
