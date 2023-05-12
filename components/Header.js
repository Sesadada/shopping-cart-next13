'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Header = () => {
  const [nav, setNav] = useState(false)
const [color, setColor] = useState("black")

  const handleNav = ( ) => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      console.log("yes")
      if(window.scrollY >= 90){
        console.log("YES")
        setColor("transparent")
       
      } else {
        setColor("black")
      }
    }
    console.log(color)
    window.addEventListener("scroll", changeColor)

    return window.removeEventListener("scroll", changeColor, true)
  }, [])
  return (
    <header style={{backgroundColor:`${color}`}} className='w-full flex items-center justify-between  ease-in duration-300 fixed left-0 top-0 h-20'>
    <div className='w-full m-auto flex justify-between items-center text-white p-4'>
    <Link href="/">
        <h1  className='font-bold text-4xl'>WitchCraft</h1>
        </Link>
    
    <ul  className='hidden sm:flex'>
    <li><Link className='p-4' href="/products" >Store</Link></li>
    <li><Link className='p-4' href="/about" >About</Link></li>
    <li><Link className='p-4' href="/contact" >Contact</Link></li> 
   </ul>
   {/* Mobile button */}
  
   <div className='block md:hidden z-10' onClick={handleNav}>
    {nav? <AiOutlineClose size={20} style={{color:"white"}}/> :<AiOutlineMenu size={20} style={{color:"white"}} />}
   </div>
   <div className={`sm:hidden absolute top-0 left-[${nav?"0":"-100%"}] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300`}>

   <ul className=''>
    <li className='p-4 text-4xl hover:text-gray-400' onClick={handleNav}><Link className='p-4' href="/products" >Store</Link></li>
    <li className='p-4 text-4xl hover:text-gray-400' onClick={handleNav}><Link className='p-4' href="/about" >About</Link></li>
    <li className='p-4 text-4xl hover:text-gray-400' onClick={handleNav}><Link className='p-4' href="/contact" >Contact</Link></li> 
   </ul>
   </div>
   </div>

    </header>
  )
}

export default Header