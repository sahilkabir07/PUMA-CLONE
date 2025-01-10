import React from 'react'
import { SiPuma } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='w-full'>
        <div className='flex justify-center items-center  bg-white text-black z-50 h-12 fixed top-0 left-0 w-full'>
            <p className='font-semibold text-small' >EXTRA 5% DISCOUNT AND FREE SHIPPING ON ALL ONLINE PAYMENTS</p>
        </div>
        <div className="flex h-32 w-full bg-gray-800 fixed text-white shadow-md z-40 p-4">
           <div className='flex gap-10 justify-center items-center fixed top-16 left-5 '>
            <span>
                <SiPuma size={35}/>
            </span>
            <span>
                New
            </span>
            <span>
                Women
            </span>
            <span>
                Men
            </span>
            <span>
                Kids
            </span>
            <span>
                Motorsport
            </span>
            <span>
                Collaborations
            </span>
            <span>
                Sports
            </span>
           </div>
           <div className='flex flex-wrap gap-10 fixed top-20 right-5  '>
            <span>
                <FaSearch />
            </span>
            <span>
                <FaRegHeart />
            </span>
            <span>
                <BsCart3 />
            </span>
            <span>
                <FaRegUser />
            </span>
           </div>
        </div>
    </div>
  )
}

export default Header
