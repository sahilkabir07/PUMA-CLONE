import React from 'react';
import { FaYoutube, FaPinterest, FaFacebook } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa6";
import { SiPuma } from "react-icons/si";

const Footer = () => {
   return (
      <footer className="px-4 divide-y bg-gray-800 text-white">
         <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
               <p className="text-xl font-bold">Support</p>
               <ul className="space-y-2 mt-4">
                  <li>Contact Us</li>
                  <li>Promotions & Sale</li>
                  <li>Track Order</li>
                  <li>Shoe Care</li>
                  <li>Tech Glossary</li>
                  <li>Initiate Return/Exchange</li>
                  <li>Sitemap</li>
               </ul>
            </div>
            <div className="grid grid-cols-2 text-sm gap-6 lg:w-2/3 sm:grid-cols-4">
               <div className="space-y-3">
                  <h3 className="tracking-wide uppercase">FAQ's</h3>
                  <ul className="space-y-2">
                     <li><a href="#">My Account</a></li>
                     <li><a href="#">Exchange & Return Policy</a></li>
                     <li><a href="#">Privacy Policy</a></li>
                     <li><a href="#">Terms & Conditions</a></li>
                  </ul>
               </div>
               <div>
                  <h3 className="tracking-wide uppercase">About</h3>
                  <ul className="space-y-2">
                     <li><a href="#">Company</a></li>
                     <li><a href="#">Corporate News</a></li>
                     <li><a href="#">Press Center</a></li>
                     <li><a href="#">Investors</a></li>
                     <li><a href="#">Sustainability</a></li>
                     <li><a href="#">Careers</a></li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h3 className="uppercase font-bold text-xl">Stay Up to Date</h3>
                  <div className="flex flex-wrap gap-4">
                     <FaYoutube size={32} />
                     <FaTwitter size={32} />
                     <FaPinterest size={32} />
                     <FaInstagram size={32} />
                     <FaFacebook size={32} />
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="font-bold text-xl">Explore</p>
                  <div className="flex gap-4">
                     <button className="border rounded-md flex flex-col items-center justify-center h-16 w-16">
                        <SiPuma size={24} />
                        <span>App</span>
                     </button>
                     <button className="border rounded-md flex flex-col items-center justify-center h-16 w-16">
                        <SiPuma size={24} />
                        <span>Track</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex flex-wrap justify-between items-center gap-6 py-6">
            <div className="flex gap-4">
               <img className="h-6 w-auto" src="https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png" alt="Visa logo" />
               <img className="h-6 w-auto" src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mc_dla_symbol_92.png" alt="Mastercard" />
               <img className="h-6 w-auto" src="https://e7.pngegg.com/pngimages/656/817/png-clipart-mastercard-maestro-credit-card-debit-card-payment-mastercard-blue-text.png" alt="Maestro" />
               <img className="h-6 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" alt="Rupay" />
            </div>
            <div className="flex items-center gap-2">
               <img className="rounded-full h-8 w-8" src="https://cdn.freebiesupply.com/logos/large/2x/indiac-logo-png-transparent.png" alt="India" />
               <p>India</p>
            </div>
            <div className="text-sm">© 1968 Company Co. All rights reserved.</div>
         </div>
      </footer>
   );
};

export default Footer;
