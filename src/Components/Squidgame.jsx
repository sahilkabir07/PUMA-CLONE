import React from 'react'

const Squidgame = () => {
  return (
    <div className='  h-[50vh] md:h-screen w-screen bg-fixed bg-center  flex-col relative mt-8  bg-[url("https://www.fashiontrendsetter.com/v2/wp-content/uploads/2024/12/PUMA-X-Netflix-Squid-Game-Collection-01.jpg")] bg-cover ' >
      <div className='absolute bottom-20 left-10'>
        <p className='text-white text-3xl font-bold'>
          PUMA x SQUID GAME
        </p>
        <p className='text-white text-xl'>
          MINGLE EDITION
        </p>
        <button className='mt-4 bg-white w-24 h-10 font-bold'>
          SHOP NOW
        </button>
      </div>
    </div>
  )
}

export default Squidgame