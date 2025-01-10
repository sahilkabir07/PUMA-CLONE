import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiPuma } from "react-icons/si";

const Footer = () => {
  return (
    <div className=' bg-gray-800 text-white  mt-24 '>
        <div className=' flex gap-32 p-4 '>
        <div>
        <p className='font-bold text-xl'>
            SUPPORT
        </p>
        <p>Contact Us</p>
        <p>Promotion & Sale</p>
        <p>Track Order</p>
        <p>Shoe Case</p>
        <p>Tech Glossary</p>
        <p>Initiate Return/Exchange </p>
        <p>Cookie Settings</p>
        </div>
        <div>
           <p className='text-xl font-bold'>FAQs</p>
           <p>My Account</p>
           <p>Exchange & Return Policy</p>
           <p>Privacy Policy</p>
           <p>Terms & Conditions</p>
           <p>Shoes</p>
        </div>
        <div>
             <p className='text-xl font-bold'>ABOUT</p>
             <p>Company</p>
             <p>Corporate News</p>
             <p>Press Center</p>
             <p>Investors</p>
             <p>Sustainability</p>
             <p>Careers</p>
             <p>Store locator</p>
             <p>PUMA Articles</p>
        </div>
        <div>
           <p className='text-xl font-bold'>STAY UP TO DATE</p>
           <div className="mt-6">
            <div className='flex gap-4'>
           <FaYoutube size={28} />
           <FaSquareXTwitter size={28} />
           <FaPinterest size={28}/>
           <FaInstagram size={28} />
           <FaFacebook size={28} />
           </div>
           <p className='mt-4 text-xl font-bold'>
            EXPLORE
           </p>
           <div className='mt-4 flex gap-4'>
            <button className='border-[1px]  rounded w-14 px-2'>
             <SiPuma size={32} />
            <p className='text-xs'>APP</p>
            </button>
            <button className='border-[1px] rounded w-16 px-2'>
            <SiPuma size={32} />
            <p className='text-xs'>TRACK</p>
            </button>
           </div>
           </div>
        </div>
        </div>
        <div className='border-t border-white w-[90%] mx-auto' >
        </div>
        <div className='flex gap-60 mt-8 ml-4  '>
            <div className=' flex h-6 gap-4'>
            <div className='bg-white rounded-[2px] h-6'>    
            <img className='w-8 h-4 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rA-0ZxPm7g-iQzApiZvLriUmnQtmRhEwmw&s" />
            </div>
            <img className='w-8 h-4 rounded' src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png" />
            <img className='w-8 h-4 rounded' src="https://w7.pngwing.com/pngs/58/14/png-transparent-amex-card-credit-logo-logos-logos-and-brands-icon.png" />
            <img className='w-8 h-4 rounded' src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png" />
            <img className='w-8 h-4 rounded' src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png"/>
            </div>
            <div className='border-[1px] w-32 h-12 flex justify-center items-center ' >
               <img className='h-8 w-8 border-[1px] rounded-[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_y1qr0S_lqYb3pZaAttBqTwr-MK3PLTYd5g&s"/>
               <p className='font-bold'>INDIA</p>
            </div>
            <div>
             <p className='text-xs'>
                © PUMA India Ltd, 2025. All Rights Reserved.
             </p>
             <p className='text-xs'>
                Imprint and Legal Data
             </p>
            </div>
        </div>
    </div>
  )
}

export default Footer