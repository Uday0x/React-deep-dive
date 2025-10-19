import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);


  function increaseNum(){
    setNum(num + 1);
  }

  function decreaseNum(){
    setNum(num - 1);
  }

  function incraesebY5(){
    setNum(num*5)
  }
  return (
    <div>
      <button onClick={increaseNum}>incarese {num}</button>
      <button onClick={decreaseNum}>decrase  {num}</button>
      <button onClick={incraesebY5}>incraese By 5 {num}</button>
    </div>
  )
}

export default App
