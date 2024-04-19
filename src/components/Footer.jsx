import React from 'react'
import { copyright, privacyInfo, socialLinks } from '../constants'
import IconRenderer from './IconRenderer'
function Footer() {
    return (
        <div className='flex md:flex-row flex-col bg-black justify-between items-center text-white mt-[7rem]  md:text-start text-center'>
            <div className='left-[0rem] bottom-[auto] bg-black w-full z-[-1] h-[300px] absolute' />

            <h2 className='xl:text-[3em] text-[2rem]'>
                Create, Explore & Collect <br />
                Abstract <span className='text-blue-500'>NFTs</span>
            </h2>
            <div className='grid gap-[1rem]'>
                <ul className='flex gap-[1rem] flex-wrap md:justify-end justify-center'>
                    {privacyInfo.map((item, index) => (
                        <li key={index} className='hover:opacity-[.5] cursor-pointer'>{item.content}</li>
                    ))}
                </ul>
                <ul className='flex gap-[1rem]  md:justify-end  justify-center'>
                    {socialLinks.map((item, index) => (
                        <li key={index} className=' transition-all ease-in text-[2em] cursor-pointer hover:text-blue-500 '>{<IconRenderer icon={item.icon} />}</li>
                    ))}
                </ul>
                <div>
                    {copyright.map(item => (
                        <p className='md:text-right text-center text-[.8em] opacity-[.7]'>{item.copyright}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Footer
