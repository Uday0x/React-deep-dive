import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter ,setCounter] = useState(0) //using let keyword is important //because we may not be able to update the value if we use const 


  function addvalue(){
  
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)


    //now the questions is what will be teh value of counter?
    //same? no change ?
    //find out 
    //answer is react always sned the teh value sin batches 
    //so it will presume as asame as value 


    setCounter(precounter => precounter +1)
    setCounter(precounter => precounter +1)
    setCounter(precounter => precounter +1)
    setCounter(precounter => precounter +1)
    //setcounter gives us call back value //using this we can access prev state


    //this gives us state of previous valu e
    //now it would incraements of 4
  }

  function removeValue(){
    setCounter(counter -1)
  }
  return (
    <>
    {counter}
    <h1>hello wlecome to counter exmaple</h1>
    {counter}
    <button
    onClick={addvalue}
    >counter{counter}</button>   

    {counter}
    <button
    onClick={removeValue}
    >counter{counter}</button>
    {counter}
    </>
  )
}

export default App
