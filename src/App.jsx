import React from 'react'
import Counter from './components/Counter'
import Tailwind from './components/Tailwind'
import './index.css'
import Props from './components/Props'

function App() {
  let myobj={
    username:"priyanka",
    age:32
  }

  let newArry=[1,2,3,4]
  return (
    <>
      {/* <h1 className="text-3xl font-bold rounded-xl p-4 underline  text-center bg-yellow-300">
      Hello world! </h1> */}
    <Props username="chaiorreact" someobje={newArry} btnText='visit me'/>
    <Props username={"hitesh"} btnText='click me'/>
   
    {/* <Counter/> */}
    {/* <Tailwind/> */}
    
      
    </>
  )
}

export default App



