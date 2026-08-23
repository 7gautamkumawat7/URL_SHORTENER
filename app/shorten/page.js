// "use client"

// import React, { useState } from 'react'
// import Link from 'next/link'

// const Page = () => {
//   const [url, seturl] = useState('')
//   const [shortUrl, setShortUrl] = useState('')
//   const [generated, setGenerated] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (url && shortUrl) {
//       setGenerated(true)
//     }
//   }

//   return (
//     <div className="mx-auto max-w-lg bg-purple-200 my-16 p-8 rounded-2xl">
//       <h1 className="font-bold text-2xl text-center mb-6">Generate Your Short URLs</h1>

//       <form className="flex flex-col gap-5">
//         {/* Original URL Input */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-2">Enter your URL</label>
//           <input
//             type="text"
//             className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
//             placeholder="https://example.com"
//             onChange={(e) => seturl(e.target.value)}
            
//             value={url}
//           />
//         </div>

//         {/* Preferred Short URL Input */}
//         <div className="flex flex-col">
//           <label className="font-medium mb-2">Preferred short URL text</label>
//           <input
//             type="text"
//             className="bg-white px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
//             placeholder="my-short-url"
//             onChange={(e) => setShortUrl(e.target.value)}
            
//             value={shorturl}
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           value={generated}
//           className="bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
//         >
//           Generate
//         </button>
//       </form>

//       {/* Show Result
//       {generated && (
//         <div className="mt-6 bg-white p-4 rounded-md shadow">
//           <p className="font-medium">Your short link:</p>
//           <a
//             href={`/${shortUrl}`}
//             className="text-purple-600 underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {window.location.origin}/{shortUrl}
//           </a>
//         </div> */}
    
//     </div>
//   )
// }

// export default Page


"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
   /// copy code through postmen
    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")   
                setshorturl("")
                console.log(result)
                alert(result.message)
            
            })
            .catch((error) => console.error(error));
    }


    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your URL'
                    onChange={e => { seturl(e.target.value) }} />

                <input type="text"
                    value={shorturl}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }} />
                <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>
            </div>

            {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
                </code></>}
        </div>
    )
}

export default Shorten