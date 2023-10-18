"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const Card = () => {

    return (
        <section className=" relative flex items-center justify-center">
            <Carousel
                transitionTime={400}
                infiniteLoop={true}

                showStatus={false}
                showArrows={false}
                autoPlay={true}
                showIndicators={false}
                showThumbs={false}
            >
                <div>
                    <Image src={'/img1.webp'} height={400} width={1000} />
                </div>

                <div>
                    <Image src={'/img3.jpg'} height={400} width={1000} />
                </div>
            </Carousel>
        </section>
    )
}

export default Card;