import React from 'react'

const SecondBanner = () => {
  return (
    <div className='relative h-[50vh] md:h-screen w-screen bg-fixed bg-cover bg-center flex-col  bg-[url("https://about.puma.com/sites/default/files/styles/dd_hero_tablet/public/media/news/images/aw24-ts-football-fpf-lookup-16x19.jpg?itok=SgqMe8Pm")] ' >
      <div className='absolute bottom-20 left-10'>
        <p className='text-white text-3xl'>
          COMING SOON
        </p>
        <p className='text-white text-xl'>
          PORTUGAL KITS DROPPING JAN 7
        </p>
        <button className='mt-4 bg-white w-24 h-10 font-medium'>
          SIGN UP
        </button>
      </div>
    </div>
  )
}

export default SecondBanner