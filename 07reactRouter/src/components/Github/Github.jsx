import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return (
        <>
            <div className="text-center m-4 bg-gray-600 text-white p-4 text-xl flex justify-evenly">
                <h3>GitHub Followers: {data.followers}</h3>
                <h3>Username: {data.login}</h3>
            </div>
            <div className='flex justify-center mb-4'><img src={data.avatar_url} alt="" /></div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}