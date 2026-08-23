"use client"

import React from 'react'
import { useState } from 'react'

const page = () => {
   const [url, setUrl] = useState('')
   const [shortUrl, setShortUrl] = useState('')
   const [generated , setGenerated] = useState(false)

   const handelChange = (e) => {
       
   }

  return (
    
    <div className='mx-auto max-w-lg bg-purple-400 my-16 p-8 rounded-2xl gap-5 flex flex-col'>
        <h1>Generate your shorr URLs</h1>
    <di>
        <input type='text' className='px-4 focus:outline-purple-600 rounded-md ' placeholder='enter your url' onChange={handelChange}></input>
        <input type='text' placeholder='enter your prefered short url text' onChange={handelChange}></input>
        <button>Generate</button>
    </di>
    </div>
  )
}

export default page