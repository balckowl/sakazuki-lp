import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
    return (
        <div className='hero md:flex md:h-[450px]  gap-4 relative container'>
            <div className="md:w-[50%] order-2 md:h-full hero-image">
                {/* <img src="/images/hero/hero.jpg" alt="" className='md:h-full w-[100%] object-cover' /> */}
            </div>
            <div className='md:w-[50%] order-1 md:h-[450px] md:flex md:justify-center md:items-center md:relative absolute md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div>
                    <h2 className='text-[19px] md:text-[40px] bg-gradient-to-r from-[#1d4592] via-purple-500 to-[#69c2ee] text-white font-bold p-2'>学生のキャリアを<br />見える化し、未来へ繋げる</h2>
                </div>
            </div>
        </div>
    )
}

export default Hero