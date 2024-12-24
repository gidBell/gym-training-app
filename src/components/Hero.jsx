import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>GidBell<span className='text-red-400'>isshed</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>It is time to take your <span className='text-red-400 font-medium'>physical fitness</span> serious. Time will not wait for you. Do not wait until you are obessed. <span className='text-red-400 font-medium'>Being obessed is highly unhealthy</span> for you, as you are overworking your heart due to excess body fat.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={'Accept & Begin'}></Button>
        </div>
    )
}
