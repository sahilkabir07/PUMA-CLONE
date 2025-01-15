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

const Header = () => {
  const offers = ["EXTRA 5% DISCOUNT AND FREE SHIPPING ON ALL ONLINE PAYMENTS", "⚡1-DAY EXPRESS DELIEVERY NOW AVAILABLE IN PATNA", "FREE RETURNS AND FREE EXCHANGE", "SOLVE YOUR QUERIES FASTER THAN EVER. SEND US A HI! ON WHATSAPP 6392839328"];

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [newhover, setNewhover] = useState(false);
  const [menhover, SetMenhover] = useState(false);
  const [kidshover, setKidshover] = useState(false);
  const [motorhover, setMotorhover] = useState(false);
  const [collabhover, setCollabhover] = useState(false);
  const [sporthover, setSporthover] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    }
  }, [offers.length])

  return (
    <div className='flex-col w-screen'>
      <div className='flex justify-center items-center bg-white text-black z-50 h-12 fixed top-0 left-0 w-full'>
        <p className='font-semibold text-small'>{offers[index]}</p>
      </div>
      <div className="flex flex-wrap h-32 w-full bg-gray-800 fixed text-white shadow-md z-40 p-4">

        <div className='relative sm:block sm:flex relative hidden flex gap-10 justify-center items-center fixed top-6 left-5 '>
          <ul className=' relative flex gap-12'>
            <li>
              <SiPuma size={35} />
            </li>
            <li onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)} className='group'>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500'>New</p>

              {hover && (
                <div
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
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
            <li className=' group' onMouseEnter={() => setNewhover(true)}
              onMouseLeave={() => setNewhover(false)}>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500'>Women</p>

              {newhover && (
                <div
                  className="absolute  left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
                  onMouseEnter={() => setNewhover(true)}
                  onMouseLeave={() => setNewhover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <WomenDropdown />
                  </motion.div>
                </div>
              )}
            </li>

            <li className=' group' onMouseEnter={() => SetMenhover(true)}
              onMouseLeave={() => SetMenhover(false)} >
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500' >Men</p>
              {menhover && (
                <div
                  className="absolute  left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
                  onMouseEnter={() => SetMenhover(true)}
                  onMouseLeave={() => SetMenhover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <MenDropdown />
                  </motion.div>
                </div>
              )}
            </li>

            <li className=' group' onMouseEnter={() => setKidshover(true)}
              onMouseLeave={() => setKidshover(false)}>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500' >Kids</p>
              {kidshover && (
                <div
                  className="absolute  left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
                  onMouseEnter={() => setKidshover(true)}
                  onMouseLeave={() => setKidshover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <KidsDropdown />
                  </motion.div>
                </div>
              )}
            </li>

            <li className=' group' onMouseEnter={() => setMotorhover(true)}
              onMouseLeave={() => setMotorhover(false)}>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500' >Motorsport</p>
              {motorhover && (
                <div
                  className="absolute  left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-[375px]"
                  onMouseEnter={() => setMotorhover(true)}
                  onMouseLeave={() => setMotorhover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <MotorDropdown />
                  </motion.div>
                </div>
              )}
            </li>

            <li className=' group' onMouseEnter={() => setCollabhover(true)}
              onMouseLeave={() => setCollabhover(false)}>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500'>                Collaborations
              </p>
              {collabhover && (
                <div
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
                  onMouseEnter={() => setCollabhover(true)}
                  onMouseLeave={() => setCollabhover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <CollabDropdown />
                  </motion.div>
                </div>
              )}
            </li>

            <li className=' group' onMouseEnter={() => setSporthover(true)}
              onMouseLeave={() => setSporthover(false)}>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500'>                Sports
              </p>
              {sporthover && (
                <div
                  className="absolute left-0 mt-auto w-screen bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-[375px]"
                  onMouseEnter={() => setSporthover(true)}
                  onMouseLeave={() => setSporthover(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <SportsDropdown />
                  </motion.div>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className='sm:hidden flex flex-wrap gap-10 fixed top-20 right-5  '>
          <ul className='flex gap-8 '>
            <li>
              <FaBars />
            </li>
            <li>
              <FaSearch />
            </li>
            <li>
              <FaRegHeart />
            </li>
            <li>
              <BsCart3 />
            </li>
            <li>
              <FaRegUser />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
