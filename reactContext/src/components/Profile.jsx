//here we try and receive the values we got from Login


import React, { useContext } from 'react'
import Usercontext from '../Context/Usercontext/Usercontext';

function Profile() {

    const { user } =useContext(Usercontext); //Be extra careful about the spellings
   

    if(!user) return <div> Please login </div>

    return <div>Profile: {user.username} {user.password}</div>;
    
  
}

export default Profile

