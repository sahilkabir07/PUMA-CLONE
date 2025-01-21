import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen w-screen bg-fixed bg-cover bg-center flex-col  bg-[url("https://images.unsplash.com/photo-1572295293833-2d7556b54324?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVtYXxlbnwwfHwwfHx8MA%3D%3D")] bg-cover bg-center text-white ' >
      <div className='absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-4 space-y-4 mt-24'>
        <div>
          <p className='text-3xl font-bold ml-16'>FLAT 40% OFF</p>
          <p className='text-xl font-medium'>+ EXTRA 5% OFF ON ONLINE PAYMENTS</p>
        </div>
        <span className='flex gap-4 '>
          <button className='bg-white text-black flex items-center justify-center h-8 w-28 font-bold'>
            FOR HIM
          </button>
          <button className='bg-white text-black flex items-center justify-center h-8 w-28 font-bold'>
            FOR HER
          </button>
          <button className='bg-white text-black flex items-center justify-center h-8 w-28 font-bold'>
            FOR KIDS
          </button>
        </span>
      </div>
    </div>
  )
}

export default Hero