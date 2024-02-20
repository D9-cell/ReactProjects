import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => { 
    //   fetch("https://api.github.com/users/D9-cell")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    

  return (
    <div className='text-center m-4 p-3 bg-gray-600 text-white text-3xl'>
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/D9-cell")
    return response.json()
}