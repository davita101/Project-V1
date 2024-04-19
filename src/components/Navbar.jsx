import React, { useState } from 'react'
import { navLinks } from '../constants'
import { FaBarsStaggered } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
function Navbar() {
    const [click, setClick] = useState(false)
    const [clickActive, setClickActive] = useState(0)
    const handelClick = () => setClick(!click)

    return (
        <div className='flex justify-between top-0 py-[1rem] md:bg-inherit nav--bg sm:px-[0] px-[1rem] w-full items-center md:sticky fixed left-0 z-[99]'>
            <span className=' md:text-black text-white font-bold sm:text-[2em] text-[1.3em] cursor-pointer'>Davit'sApp</span>
            {/* DESKTOP */}
            <ul className='md:flex hidden gap-[1rem] '>
                {navLinks.map((item, index) => (
                    <li key={index} className=' hover:opacity-[.5] ease-in cursor-pointer transition-all'>{item.label}</li>
                ))}
            </ul>
            <div className='md:flex hidden gap-[1rem] items-center'>
                <button className='hover:bg-black hover:text-white transition-all py-[.5rem] px-[.5rem] rounded-[.3rem] cursor-pointer'>Get Started</button>
                <span className='hover:bg-black hover:text-white transition-all py-[.5rem] px-[.5rem] rounded-[.3rem] cursor-pointer'>Login in</span>
            </div>
            {/* MOBILE */}
            <div onClick={handelClick} className='md:hidden flex absolute z-[1] text-[2rem] right-[1rem] cursor-pointer'>
                {click ? <FaBarsStaggered className='  absolute opacity-[0] transition-all' /> : <FaBarsStaggered className='absolute opacity-[1] transition-all text-white' />}
                {click ? <IoClose className=' text-white text-[3rem] opacity-[1] transition-all' /> : <IoClose className='opacity-[0]    transition-all' />}
            </div>

            {<div className={`${!click ? 'translate-x-[500px]' : 'translate-x-0'} shadow-indigo-500/50 top-[3   rem] transition-all ease-in flex md:hidden relative `}>
                {/* BLUE BAR */}
                <div className='rounded-[.5rem]  absolute bg-blue-600 w-[250px] h-[360px] top-[-2rem] right-[-3rem]' />
                {/* NAVLINKS */}
                <ul className='flex flex-col absolute right-[2rem] text-center top-[1rem]'>
                    {navLinks.map((item, index) => (
                        <li onClick={() => setClickActive(index)} key={index} className={`relative hover:bg-[#fff] hover:text-[black] hover:right-[-5.3rem] right-[-5.3rem] hover:w-[18rem] w-[18rem] h-[3rem] px-[1rem]  text-[1.2em] hover:shadow-lg hover:text-[1.5em] hover:px-[.5rem] hover:text-[#ffff] ease-in cursor-pointer transition-all flex items-center justify-center ${clickActive == index && 'active hover:bg-black hover:text-white'} `}>{item.label}</li>
                    ))}
                </ul>
                {/* BUTTONS */}
                <div className='flex gap-[1rem] items-center flex-col-reverse absolute right-[1.5rem] top-[14rem]'>
                    <button className='border-2 w-[8rem]  text-center rounded-[.3rem] text-[#fff] cursor-pointer p-[.2rem]  hover:border-0 hover:bg-black hover:p-[.32rem] hover:w-[100%] hover:translate-y-[-.5rem] transition-all hover:shadow-lg'>Get Started</button>
                    <span className='border-2 w-[8rem]  text-center rounded-[.3rem] text-[#fff] cursor-pointer p-[.2rem]  hover:border-0 hover:bg-black hover:p-[.32rem] hover:w-[100%] hover:translate-y-[-.5rem] transition-all hover:shadow-lg' >Login in</span>
                </div>
            </div>}
        </div>
    )
}

export default Navbar
