import { useState, useRef, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null); // useref

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


  const generatePassoword=useCallback(()=>{
    let pass= "";
    let Str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) Str+= "0123456789";
    if(character) Str+= "!@#$%&*";
   
    for (let i = 0; i < length; i++) {
      let char = Str[Math.floor(Math.random() * Str.length)];
      pass+=char
    }
    setPassword(pass);
  },[length, character, number,setPassword]) //these dependencies are given for optimization purpose

  //so whenever there is refresh on the page 
  //we wpould use useeffect
  useEffect(() => {
    generatePassoword();
  }, [generatePassoword, length, character, number])


  return (
      <div className="h-screen w-screen flex justify-center items-center bg-gray-900">

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-10">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          

          <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
        </div>
        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>

       <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
         <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                  setCharacter((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>


      </div>
      </div>
      </div>
    
  );
}

export default App;
