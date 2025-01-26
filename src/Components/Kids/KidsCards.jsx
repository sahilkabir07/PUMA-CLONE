import React from 'react'
import kidsData from "../../constants/KidsProductsInfo.json"

const KidsCards = () => {
    return (
        <div>
            <div className='ml-12 h-40 flex-col flex justify-center'>
                <p className='mt-10 text-4xl font-bold hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text'>
                    NEW KIDS PRODUCTS
                </p>
                <p className='font-bold text-xl mt-10 hover:bg-gradient-to-r hover:from-gray-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text'>1127 Products</p>
            </div>
            <div className='flex '>
                <div className="flex flex-wrap gap-4 p-4  items-center justify-center ">
                    {kidsData.map((item) => (
                        <div
                            className="w-[250px] bg-white shadow-md rounded-lg p-4 flex flex-col transform transition-transform duration-300 hover:scale-110 "
                            key={item.id}
                        >
                            <div className="text-center">
                                <img
                                    src={item.img}
                                    className="w-full h-48 object-cover rounded-md mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-gray-800 font-semibold">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KidsCards