import React from 'react'

const TravelBanner = () => {
  return (
     <div className='bg-fixed bg-[url("https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F08%2Fthe-weeknd-puma-xo-collection-2017-summer-release-2.jpg?q=75&w=800&cbr=1&fit=max")] bg-cover bg-top mt-16 w-screen h-screen relative'>
        <div className='absolute bottom-20 right-10'>
            <p className='text-white font-bold text-3xl'>
                TRAVEL STORE
            </p>
            <p className='text-white text-xl'>
                TAILORED FOR EVERY ADVENTURE
            </p>
            <button className='bg-white w-24 h-10 font-bold mt-4'>
                SHOP NOW
            </button>
        </div>
    </div>
  )
}

export default TravelBanner