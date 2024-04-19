import React, { useEffect, useState } from 'react'
import { heroText } from '../constants'
import { Nft } from '../assets'
import { CgShoppingBag } from 'react-icons/cg'
import { gsap } from 'gsap'
import SplitText from "gsap-trial/SplitText"



function Hero() {
    const [click, setClick] = useState(false)
    const [clickMb, setClickMb] = useState(false)
    document.addEventListener('DOMContentLoaded', function () {
        const content = document.getElementById('heroText');

        if (content) {
            // Split text into individual characters
            const characters = content.innerText.split('');

            // Clear the original content
            content.innerHTML = '';

            // Wrap each character in a span and append it back to the container
            characters.forEach((char, index) => {
                let counter = characters.length
                const charElement = document.createElement('span');
                if (index == counter - 1 || index == counter - 2 || index == counter - 3) {
                    charElement.classList.add('text-blue-500')
                }
                if (index == counter - 3) {
                    const el = document.createElement('br')
                }
                charElement.textContent = char;
                content.appendChild(charElement);
            });
            console.log()

            // Animate using GSAP
            gsap.from(content.children, {
                opacity: 0,
                y: 100,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
                repeat: Infinity,
                delay: '500ms'
            });
        } else {
            console.error("Element with ID 'heroText' not found.");
        }
    });

    return (

        < div className='flex justify-between md:flex-row flex-col-reverse items-center' >
            <div className='flex flex-col gap-[1rem]'>
                <h1 id="heroText" className='xl:text-[5em] text-[3em] font-bold'>Let's Buy Some <br />
                    <span className=' text-blue-500'>NFT</span></h1>

                {heroText.map((item, index) => (
                    <p id='mainImg' key={index} className='text-[1em] max-w-[500px] opacity-[.7] '>{item.content}</p>
                ))}
                <div onClick={() => setClickMb(!clickMb)} onMouseOver={() => setClick(true)} onMouseLeave={() => setClick(false)} className='w-[15rem] h-[4rem] px-[2rem] py-[1rem] gap-[.5rem] overflow-hidden flex items-center justify-center bg-black text-white  cursor-pointer rounded-[50px] shadow-md'>
                    <div className={` ${click || clickMb ? 'opacity-0 absolute z-[-1] ' : 'opacity-[1]'}  transition-all duration-300 ease-in bg-white rounded-full p-[.5rem]`}>
                        <CgShoppingBag className='text-[#000]' />

                    </div>
                    <span className={`${(click || clickMb) && 'text-[1.5em] absolute'}  duration-300 transition-all `}>Buy Now</span>

                </div>
            </div>
            <div>
                <img src={Nft} alt="" />
            </div>
        </div >
    )
}

export default Hero
