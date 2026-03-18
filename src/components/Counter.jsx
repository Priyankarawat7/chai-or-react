
import React, { useState } from 'react'

function Counter() {
  let [counter,SetCounter] = useState(15)
//   useState se 2 chize milti h array ke format mai [value,function]
// values update 

    const incval=()=>{

        if(counter>=20)
        {
            alert(' not greater than 20')
            
        }

        else{
              SetCounter(counter+1)

        }
        //console.log('clicked',counter);
        // counter=counter+1
      
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
   
    
  }

  return (
    <>
     
    <h1>Chai or react</h1>    <h2>Counter value: {counter} </h2>
   <button onClick={incval}>Increase value</button>
   
   <button onClick={decval}> Decrease value </button>
      <p>footer {counter}</p>
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
