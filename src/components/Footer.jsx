
import Link from 'next/link'
const Footer = () => {

    return (
        <footer className=' mt-10 flex items-center justify-center mb-24' >
            <div className='md:px-[60px] px-[1.25rem] mx-auto max-w-[1440px] flex  flex-col gap-14 w-full'>
                <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row' >
                    <Link href={'/'} className=' mb-10'>
                        {/* <Image src={"/images/logo.png"} alt="Logo" width={72} height={36}/> */}
                        <p className="text-2xl font-bold">Edu<span className="text-blue-400">Focus</span></p>
                    </Link>

                    <div className=' flex flex-wrap gap-10 sm:justify-between md:flex-1'>
                        <div className='flex flex-col gap-5 '>
                            <h4 className='font-bold whitespace-nowrap text-xl'>
                                Links
                            </h4>
                            <ul className='flex flex-col gap-4 text-gray-900'>
                                <li>
                                    <Link href={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>About Us</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Social Links</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <h4 className='font-bold whitespace-nowrap text-xl'>
                                Links
                            </h4>
                            <ul className='flex flex-col gap-4 text-gray-900 '>
                                <li>
                                    <Link href={'/'}>About EduFocus</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Privacy policy</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Contact Us</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Dropout</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <h4 className='font-bold whitespace-nowrap text-xl'>
                                Contact Us
                            </h4>
                            <div className='flex gap-4 md:flex-col lg:flex-row'>
                                <p className=' whitespace-nowrap'>
                                    Admin :
                                </p>
                                <p className='whitespace-nowrap'>
                                    123-456-7890
                                </p>
                            </div>
                            <div className='flex gap-4 md:flex-col lg:flex-row'>
                                <p className=' whitespace-nowrap'>
                                    Address :
                                </p>
                                <p className='whitespace-nowrap'>
                                    Mango, Jamshedpur
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <h4 className='font-bold whitespace-nowrap text-xl'>
                                Links
                            </h4>
                            <ul className='flex flex-col gap-4 text-gray-900 '>
                                <li>
                                    <Link href={'/'}>About EduFocus</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Privacy policy</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Contact Us</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Dropout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-300' />
                <p className='w-full text-center text-gray-400'>2023 EduFocus | All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer