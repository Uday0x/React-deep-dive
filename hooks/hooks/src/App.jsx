import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter ,setCounter] = useState(0) //using let keyword is important //because we may not be able to update the value if we use const 


  function addvalue(){
    counter = counter + 1;
    setCounter(counter)
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
