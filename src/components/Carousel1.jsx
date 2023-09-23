'use client'
import { Carousel } from 'react-responsive-carousel';

import React from 'react'

const Card = () => {
    return (
        <Carousel
            autoPlay={true}
            showStatus={false}

            showArrows={false}
            showIndicators={false}
            showThumbs={false}
        >
            <div>
                <img src="/pic.png" className='w-[100%] relative' />
                <div className='text-black text-xl absolute top-[50%] left-[50%]'>

                    <h1 className=''> HEADING</h1>
                    <button className='bg-black text-white px-4 py-2 rounded-md'>View Report</button>
                </div>
            </div>

        </Carousel>
    )
}

export default Card