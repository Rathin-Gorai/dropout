'use client'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';


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
                            <h2 className="text-2xl font-semibold mb-4">Inspire and facilitate nationwide education reform by reducing school dropout rates through data-driven insights and policy advocacy.</h2>
                            <Link href="/#chart">
                            <button className="bg-slate-950 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                              View Reports
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={'/pic1.avif'} alt={'jjj'} className="w-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="md:absolute md:inset-0 md:flex md:items-center md:justify-center hidden">
                        <div className="text-white text-center">
                            <h2 className="text-2xl font-semibold mb-4">Inspire and facilitate nationwide education reform by reducing school dropout rates through data-driven insights and policy advocacy.</h2>
                            <button className="bg-slate-950 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                              View Reports
                            </button>
                        </div>
                    </div>
                </div>

            </Carousel>


        </>
    )
}

export default Card;