import React from 'react'

const SoftrideBanner = () => {
  return (
    <div className='bg-fixed bg-[url("https://cdn.sanity.io/images/qa41whrn/prod/1af61288fbce247d372351b556ba46c92ad22569-2000x1125.png")] bg-cover bg-top mt-16 w-screen h-screen relative'>
        <div className='absolute bottom-20 right-10'>
            <p className='text-white font-bold text-3xl'>
                SOFTRIDE
            </p>
            <p className='text-white text-xl'>
                ULTIMATE CUSHIONING AND COMFORT
            </p>
            <button className='bg-white w-24 h-10 font-bold mt-4'>
                SHOP NOW
            </button>
        </div>
    </div>
  )
}

export default SoftrideBanner