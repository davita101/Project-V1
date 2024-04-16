import React, { useState } from 'react'
import { navLinks } from './constants'
import { FaBarsStaggered } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
function Navbar() {
    const [click, setClick] = useState(false)
    const handelClick = () => setClick(!click)
    return (
        <div className='flex justify-between w-full px-[3rem] items-center'>
            <span className=' text-blue-600 font-bold text-[2em] cursor-pointer'>Davit'sApp</span>
            {/* DESKTOP */}
            <ul className='md:flex hidden gap-[1rem] '>
                {navLinks.map((item, index) => (
                    <li key={index} className=' hover:text-[#ffffff] ease-in cursor-pointer transition-all'>{item.label}</li>
                ))}
            </ul>
            <div className='md:flex hidden gap-[1rem] items-center'>
                <button className='bg-black transition-all ease-in hover:bg-transparent hover:text-black text-white p-2 rounded-[.3rem]'>Get Started</button>
                <span>Login in</span>
            </div>
            {/* MOBILE */}
            <div onClick={handelClick} className='md:hidden flex absolute z-[999] text-[2rem] right-[1rem] cursor-pointer'>
                {click ? <FaBarsStaggered className=' absolute opacity-[0] transition-all' /> : <FaBarsStaggered className='absolute opacity-[1] transition-all' />}
                {click ? <IoClose className=' text-white text-[3rem] opacity-[1] transition-all' /> : <IoClose className='opacity-[0]    transition-all' />}
            </div>

            {<div className={`${!click ? 'translate-x-[500px]' : 'translate-x-full'} shadow-indigo-500/50 transition-all ease-in flex md:hidden relative `}>
                <div className='rounded-[.5rem]  absolute bg-blue-600 w-[250px] h-[350px] top-[-2rem] right-[-3rem]' />
                <ul className='flex gap-[1rem] flex-col absolute right-[2rem] text-center top-[0]'>
                    {navLinks.map((item, index) => (
                        <li key={index} className=' text-[1.2em] hover:text-[#ffff] ease-in cursor-pointer transition-all'>{item.label}</li>
                    ))}
                </ul>
                <div className='flex gap-[1rem] items-center flex-col-reverse absolute right-[.5rem] top-[11.5rem]'>
                    <button className='bg-black transition-all ease-in hover:bg-transparent hover:border-2 text-white p-2 w-[8rem] rounded-[.3rem]'>Get Started</button>
                    <span className='border-2 w-[8rem] text-center rounded-[.3rem] text-[#fff] cursor-pointer p-[.2rem]  hover:border-0 hover:bg-black hover:p-[.32rem]' >Login in</span>
                </div>
            </div>}
        </div>
    )
}

export default Navbar
