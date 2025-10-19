import React, { useState } from 'react'

const App = () => {
  const [name,setName] = useState("help otehr")
  const submitHandling = (e)=>{
    console.log("submitHandling")
    e.preventDefault(); //because foem gets on click an dit realods teh website
  }
  return (
    <>
    <form onSubmit={submitHandling}>
      <input 
      type="text"
      placeholder=''
      value={name}
      onChange={(e)=>{
        console.log(e.target.value);
        setName(e.target.value)
      }}
       />
       <button>submit</button>
    </form>
    </>
  )
}

export default App
