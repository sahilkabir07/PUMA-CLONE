import React from 'react'
import { SiPuma } from "react-icons/si";
import { FaBars, FaCross, FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegCircleXmark, FaRegUser } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import NewDropDown from './NewDropDown';
import { motion } from 'framer-motion';
import WomenDropdown from './WomenDropdown';
import MenDropdown from './MenDropdown';
import KidsDropdown from './KidsDropdown';
import MotorDropdown from './MotorDropdown';
import CollabDropdown from './CollabDropdown';
import SportsDropdown from './SportsDropdown';
import { useNavigate } from 'react-router-dom';

const Header = ({ loadingBarRef }) => {
  const offers = ["EXTRA 5% DISCOUNT AND FREE SHIPPING ON ALL ONLINE PAYMENTS", "⚡1-DAY EXPRESS DELIEVERY NOW AVAILABLE IN PATNA", "FREE RETURNS AND FREE EXCHANGE", "SOLVE YOUR QUERIES FASTER THAN EVER. SEND US A HI! ON WHATSAPP 6392839328"];

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [newhover, setNewhover] = useState(false);
  const [menhover, SetMenhover] = useState(false);
  const [kidshover, setKidshover] = useState(false);
  const [motorhover, setMotorhover] = useState(false);
  const [collabhover, setCollabhover] = useState(false);
  const [sporthover, setSporthover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchDrop, setIsSearchDrop] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    }
  }, [offers.length]);

  const navigate = useNavigate();

  const openNew = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/New');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const openHome = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/');
      loadingBarRef.current.complete();
    }, 1000);
  };

  const openMen = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/Men');
      loadingBarRef.current.complete();
    }, 1000);
  };
  const openWomen = () => {
    loadingBarRef.current.continuousStart(30, 100);
    setTimeout(() => {
      navigate('/Women');

      loadingBarRef.current.complete();
    }, 1000);
  };
  const toggleSearch = () => {
    setIsSearchDrop(!isSearchDrop)
  }
  const toggleMenuclose = () => {
    setIsSearchDrop(!isSearchDrop)
  }


  return (
    <div className='flex-col w-screen'>
      <div className='flex justify-center items-center bg-white text-black z-50 h-12 fixed top-0 left-0 w-full'>
        <p className='font-semibold text-small'>{offers[index]}</p>
      </div>
      <div className="flex flex-wrap h-32 w-full bg-gray-800 fixed top-0 text-white shadow-md z-40 p-4">
        <span className='mt-14' onClick={openHome} ><SiPuma size={32} /></span>
        <div className="hidden lg:flex gap-10 justify-center items-center top-6 left-8 relative">
          <ul className=' relative flex gap-12'>
            <li onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)} className='group'>
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500' onClick={openNew}>New</p>

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
              <p onClick={openWomen} className='hover:underline cursor-pointer hover:decoration-yellow-500'>Women</p>

              {newhover && (
                <div
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
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
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500' onClick={openMen} >Men</p>
              {menhover && (
                <div
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
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
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
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
                  className="absolute left-0 mt-auto w-auto bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-[375px]"
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
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500'> Collaborations
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
              <p className='hover:underline cursor-pointer hover:decoration-yellow-500'> Sports
              </p>
              {sporthover && (
                <div
                  className="absolute left-0 mt-auto w-screen bg-black/30 backdrop-blur-lg text-white rounded-md shadow-lg p-8 h-auto"
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
        <div className=' flex flex-wrap gap-10 fixed top-20 right-5  '>
          <ul className='flex gap-8 '>
            <button className='lg:hidden' onClick={toggleMenu}>
              <FaBars />
            </button>
            <li>
              <FaSearch onClick={toggleSearch} />
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
        {isSearchDrop && (
          <div className="absolute bg-white border left-0 w-screen h-screen border-gray-300 shadow-lg rounded p-4 mt-4 flex items-top gap-4 ">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 h-12 p-2 border border-gray-300 rounded text-black"
            />
            <button className="w-14 h-12 bg-blue-500 text-white rounded-full flex justify-center items-center">
              <FaSearch />
            </button>
            <button onClick={toggleMenuclose} className="h-10 w-6">
              <FaRegCircleXmark color='black' />
            </button>
          </div>


        )}
        {isOpen && (
          <div className="lg:hidden flex flex-col bg-gray-800 text-white fixed top-32 w-full z-30 p-4 gap-4">
            <a onClick={openNew} className="hover:underline">
              New
            </a>
            <a className="hover:underline">
              Collections
            </a>
            <a className="hover:underline">
              About
            </a>
            <a className="hover:underline">
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
