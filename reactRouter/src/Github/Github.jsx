import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ayushgupta-235')
    //     .then(response => response.json())
    //     .then(data=> setData(data))
    // },[])
  return (
    <>
        <div className="flex items-center justify-center h-screen">
    <h1 className="text-2xl font-bold text-gray-800 bg-gray-200 px-4 py-2 rounded-md shadow-md">
      Github Followers: {data.followers}
    </h1>
    <img src={data.avatar_url} />
  </div>
  
    </>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/ayushgupta-235')
    return response.json()
}
