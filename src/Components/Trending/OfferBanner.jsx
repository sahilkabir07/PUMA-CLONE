import React from 'react'

const OfferBanner = () => {
    return (
        <div>
            <div className='bg-red-600 w-screen h-44 mt-32 flex-col flex items-center justify-center'>
                <div >
                    <p className='text-3xl text-white font-bold  '>FLAT 40% OFF | END OF SEASON SALE</p>
                </div>
                <span className='flex gap-4 '>
                    <button className='underline text-white flex items-center justify-center  font-bold'>
                        FOR HIM
                    </button>
                    <button className='underline text-white flex items-center justify-center font-bold'>
                        FOR HER
                    </button>
                    <button className='underline text-white flex items-center justify-center  font-bold'>
                        FOR KIDS
                    </button>
                </span>
                <span>
                    <p className='text-white'>EXTRA 5% OFF ON ONLINE PAYMENTS</p>
                </span>
            </div>
        </div>
    )
}

export default OfferBanner