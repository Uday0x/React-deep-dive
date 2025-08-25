//here we try to write the code where we send the data
import React, { useContext, useState } from "react";
import Usercontext from "../Context/Usercontext/Usercontext";



function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


    const { setUser } = useContext(Usercontext);


    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username,password});
    }


    return (
        <div>
            <h1>login</h1>
            <input type="text"
            placeholder="enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input type="text"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Login</button>
            
        </div>
    )
}

export default Login