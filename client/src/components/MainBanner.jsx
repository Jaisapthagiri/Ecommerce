import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
    return (
        <div className='relative no-scrollbar'>
            <img src={assets.main_banner_bg} alt="Banner" className='w-full h-120 hidden md:block' />
            <img src={assets.main_banner_bg} alt="Banner" className='w-full md:hidden' />

            <div className='absolute inset-0 flex flex-col items-center md:items-end justify-end md:justify-center pb-24 md:pb-0 px-4 md:pr-18 lg:pr-24'>
                <h1 className='text-3xl text-white  md:text-4xl lg:text-5xl font-bold text-center md:text-right max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>
                    Everything You Want, Right Here!
                </h1>
                <div className='flex items-center mt-6 font-medium'>
                    <Link to={'/products'} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
                        Shop now
                        <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt='arrow' />
                    </Link>

                    <Link to={'/products'} className='group hidden text-white md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
                        Explore deals
                        <img className='transition bg-white group-hover:translate-x-1' src={assets.black_arrow_icon} alt='arrow' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
