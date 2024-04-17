import React from 'react'
import { Card } from '../components'
import { infoText } from './constants'



function Info() {
    return (
        <div className='grid gap-[2rem]'>
            <h2>Sell Your NFT's</h2>
            <div className='flex gap-[1rem] flex-wrap'>
                {infoText.map((item, index) => (
                    <Card heading={item.heading} paragraph={item.paragraph} icon={item.icon} />
                ))}
            </div>
        </div>
    )
}

export default Info
