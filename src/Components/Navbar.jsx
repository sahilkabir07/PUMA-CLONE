import React, { useState, useEffect } from 'react';
import { SiPuma } from "react-icons/si";
import { FaBars, FaSearch, FaRegHeart, FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { motion } from 'framer-motion';
import NewDropDown from './NewDropDown';
import WomenDropdown from './WomenDropdown';
import MenDropdown from './MenDropdown';
import KidsDropdown from './KidsDropdown';
import MotorDropdown from './MotorDropdown';
import CollabDropdown from './CollabDropdown';
import SportsDropdown from './SportsDropdown';

const Navbar = () => {
  const offers = [
    "EXTRA 5% DISCOUNT AND FREE SHIPPING ON ALL ONLINE PAYMENTS",
    "⚡1-DAY EXPRESS DELIEVERY NOW AVAILABLE IN PATNA",
    "FREE RETURNS AND FREE EXCHANGE",
    "SOLVE YOUR QUERIES FASTER THAN EVER. SEND US A HI! ON WHATSAPP 6392839328"
  ];

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState({
    new: false,
    women: false,
    men: false,
    kids: false,
    motorsport: false,
    collaborations: false,
    sports: false
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [offers.length]);

  return (
    <div className='w-full'>
      {/* Top Offers Bar */}
      <div className='flex justify-center items-center bg-white text-black z-50 h-12 fixed top-0 left-0 w-full'>
        <p className='font-semibold text-small'>{offers[index]}</p>
      </div>

      {/* Main Header */}
      <div className="flex h-32 w-full bg-gray-800 fixed text-white shadow-md z-40 p-4">
        {/* Logo and Navigation */}
        <div className='flex items-center gap-10 fixed top-6 left-5'>
          <SiPuma size={35} />
          <ul className='flex gap-6'>
            <li
              className='hover:underline cursor-pointer hover:decoration-yellow-500'
              onMouseEnter={() => setHover({ ...hover, new: true })}
              onMouseLeave={() => setHover({ ...hover, new: false })}
            >
              New
              {hover.new && (
                <div
                  className="absolute left-0 mt-[65.5%] w-screen bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-[375px]"
                  onMouseEnter={() => setHover({ ...hover, new: true })}
                  onMouseLeave={() => setHover({ ...hover, new: false })}
                >
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
            <li
              className='hover:underline cursor-pointer hover:decoration-yellow-500'
              onMouseEnter={() => setHover({ ...hover, women: true })}
              onMouseLeave={() => setHover({ ...hover, women: false })}
            >
              Women
              {hover.women && (
                <div
                  className="absolute left-0 mt-[65.5%] w-screen bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-[375px]"
                  onMouseEnter={() => setHover({ ...hover, women: true })}
                  onMouseLeave={() => setHover({ ...hover, women: false })}
                >
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
            <li
              className='hover:underline cursor-pointer hover:decoration-yellow-500'
              onMouseEnter={() => setHover({ ...hover, men: true })}
              onMouseLeave={() => setHover({ ...hover, men: false })}
            >
              Men
              {hover.men && (
                <div
                  className="absolute left-0 mt-[65.5%] w-screen bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-[375px]"
                  onMouseEnter={() => setHover({ ...hover, men: true })}
                  onMouseLeave={() => setHover({ ...hover, men: false })}
                >
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
            <li
              className='hover:underline cursor-pointer hover:decoration-yellow-500'
              onMouseEnter={() => setHover({ ...hover, kids: true })}
              onMouseLeave={() => setHover({ ...hover, kids: false })}
            >
              Kids
              {hover.kids && (
                <div
                  className="absolute left-0 mt-[65.5%] w-screen bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-[375px]"
                  onMouseEnter={() => setHover({ ...hover, kids: true })}
                  onMouseLeave={() => setHover({ ...hover, kids: false })}
                >
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
            <li
              className='hover:underline cursor-pointer hover:decoration-yellow-500'
              onMouseEnter={() => setHover({ ...hover, motorsport: true })}
              onMouseLeave={() => setHover({ ...hover, motorsport: false })}
            >
              Motorsport
              {hover.motorsport && (
                <div
                  className="absolute left-0 mt-[65.5%] w-screen bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-[375px]"
                  onMouseEnter={() => setHover({ ...hover, motorsport: true })}
                  onMouseLeave={() => setHover({ ...hover, motorsport: false })}
                >
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
            <li
              className='hover:underline cursor-pointer hover:decoration-yellow-500'
              onMouseEnter={() => setHover({ ...hover, collaborations: true })}
              onMouseLeave={() => setHover({ ...hover, collaborations: false })}
            >
              Collaborations
              {hover.collaborations && (
                <div
                  className="absolute left-0 mt-[65.5%] w-screen bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-[375px]"
                  onMouseEnter={() => setHover({ ...hover, collaborations: true })}
                  onMouseLeave={() => setHover({ ...hover, collaborations: false })}
                >
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
            <li
              className='hover:underline cursor-pointer hover:decoration-yellow-500'
              onMouseEnter={() => setHover({ ...hover, sports: true })}
              onMouseLeave={() => setHover({ ...hover, sports: false })}
            >
              Sports
              {hover.sports && (
                <div
                  className="absolute left-0 mt-[65.5%] w-screen bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-[375px]"
                  onMouseEnter={() => setHover({ ...hover, sports: true })}
                  onMouseLeave={() => setHover({ ...hover, sports: false })}
                >
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

        {/* Right Side Icons */}
        <div className='flex gap-10 fixed top-20 right-5'>
          <FaBars className='block sm:hidden text-white' />
          <FaSearch />
          <FaRegHeart />
          <BsCart3 />
          <FaRegUser />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
