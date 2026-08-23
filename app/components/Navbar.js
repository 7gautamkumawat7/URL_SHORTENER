import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-500 flex justify-center px-3 items-center text-white'>
            <ul className='flex gap-8'>
                <Link href="/"><li>Home</li></Link>
                <Link href=""><li>About</li></Link>
                <Link href=""><li>Shortener</li></Link>
                <Link href=""><li>COntact us</li></Link>
                <li className='felx '>
                    <Link href=""><li>try now</li></Link>
                    <Link href=""><li>git hub</li></Link>
                </li>


            </ul>
        </nav>


    )
}

export default Navbar
