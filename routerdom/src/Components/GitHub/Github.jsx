import React from 'react'
import { useLoaderData } from 'react-router'


//we also this uselaoder hook for teh values of the loader

function Github() {
    const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}


export default Github;


export const githubinfoLoader = async()=>{
    const res = await fetch('https://api.github.com/users')
    return res.json() 
}
