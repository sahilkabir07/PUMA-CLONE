import React from 'react'

const ThirdBanner = () => {
  return (
    <div className='flex w-screen mt-16 ml-2'>
      <div className='w-1/3 h-[100%]'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624709/01/mod01/fnd/IND/fmt/png/PUMA-x-X-GIRL-Women's-Jacket" />
      </div>
      <div className='bg-gray-400 h-100 w-1/3 flex flex-col items-center'>
        <p className='text-3xl mt-40 font-bold'>
          MMQ
        </p>
        <p>
          HOLIDAY-READY WARDROBE
        </p>
        <button className='mt-4 bg-black text-white w-28 h-10'>
          SHOP NOW
        </button>
      </div>
      <div className='w-1/3'>
        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/525724/01/mod01/fnd/IND/fmt/png/PUMA-FIT-Woven-Full-Zip-Men's-Training-Jacket" alt="" />
      </div>
    </div>
  )
}

export default ThirdBanner