import React from 'react'

const Adapter = () => {
    return (
        <div className='container py-[100px]'>
            <div className='flex md:flex-row flex-col items-center justify-around h-full gap-[70px]'>
                <div>
                    <img src="/images/hero/musasino.png" alt="" />
                </div>
                <div>
                    <img src="/images/hero/chibakougyou.png" alt="" className='w-[150px]' />
                </div>
                <div>
                    <img src="/images/hero/dotshapy.jpeg" alt="" className='w-[150px]' />
                </div>
            </div>
        </div>
    )
}

export default Adapter