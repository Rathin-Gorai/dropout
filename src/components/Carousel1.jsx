'use client'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react'

const Card = () => {
    return (
        <>

            <Carousel autoPlay={true}
                showStatus={false}
                infiniteLoop={true}
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                className="bg-slate-200 z-10">

                <div className="relative">
                    <img src={'/pic.png'} alt={'jjj'} className="w-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="md:absolute md:inset-0 md:flex md:items-center md:justify-center hidden">
                        <div className="text-white text-center">
                            <h2 className="text-2xl font-semibold mb-4">Drop out Data</h2>
                            <button className="bg-slate-950 hover:bg-slate-900 text-white  py-2 px-4 rounded">
                                View Report
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={'/pic1.avif'} alt={'jjj'} className="w-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="md:absolute md:inset-0 md:flex md:items-center md:justify-center hidden">
                        <div className="text-white text-center">
                            <h2 className="text-2xl font-semibold mb-4">Drop out Data</h2>
                            <button className="bg-slate-950 hover:bg-slate-900 text-white  py-2 px-4 rounded">
                                View Report
                            </button>
                        </div>
                    </div>
                </div>

            </Carousel>


        </>
    )
}

export default Card