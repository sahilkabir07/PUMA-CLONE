import React from 'react'
import { SiPuma } from "react-icons/si";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import NewDropDown from './NewDropDown';
import { motion } from 'framer-motion';
import WomenDropdown from './WomenDropdown';
import MenDropdown from './MenDropdown';
import KidsDropdown from './KidsDropdown';
import MotorDropdown from './MotorDropdown';
import CollabDropdown from './CollabDropdown';
import SportsDropdown from './SportsDropdown';

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [newhover, setNewhover] = useState(false);
  const [menhover, SetMenhover] = useState(false);
  const [kidshover, setKidshover] = useState(false);
  const [motorhover, setMotorhover] = useState(false);
  const [collabhover, setCollabhover] = useState(false);
  const [sporthover, setSporthover] = useState(false);
  return (
    <header className="p-4 dark:bg-gray-800 text-white z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
            icon
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li>
              <SiPuma size={35} />
            </li>
            <li onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)} className='group'>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500'>New</p>

              {hover && (
                <div
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto z-500"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <NewDropDown />
                  </motion.div>
                </div>
              )}
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>

          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Log in</button>
          <ul className='flex'>
            <li>ONE</li>
            <li>TWO</li>
            <li>THREE</li>
          </ul>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar