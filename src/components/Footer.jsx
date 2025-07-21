import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-20">
      <div className="max-w-[1300px] mx-auto grid grid-cols-4 gap-14">
        <div>

          <h3 className="text-3xl tracking-wide font-normal mb-10 font-serif">Piatto Toscano..</h3>
          <p className="text-sm">
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-md font-bold mt-3 mb-10">WORKING HOURS</h3>
          <div className='flex justify-between mb-2'>
            <p className="text-sm font-light">Monday - Friday</p>
            <p className="text-sm font-light">09:00 - 22:00</p>
          </div>
          <div className='flex justify-between mb-2'>
            <p className="text-sm font-light">Saturday</p>
            <p className="text-sm font-light">11:00 - 00:00</p>
          </div>
          <div className='flex justify-between mb-5'>
            <p className="text-sm font-light">Sunday</p>
            <p className="text-sm font-light">11:00 - 23:00</p>
          </div>
          <div className='flex justify-around mb-2'>
            <p className="text-sm font-light">* Happy hour</p>
            <p className="text-sm font-light">17:00 - 21:00</p>
          </div>
        </div>

        <div>
          <h3 className="text-md font-bold mt-3 mb-10">OUR ADDRESS</h3>
          <a href='#adress' className='flex items-center mb-8 hover:text-orange-500 transition-all duration-200 ease-in'>
            <MdLocationOn /> <p className="text-sm font-normal ml-2">Silk St, Barbican, London EC2Y 8DS, UK</p>
          </a>
          <a href='#call' className='flex items-center mb-8 hover:text-orange-500 transition-all duration-200 ease-in'>
            <IoCall /> <p className="text-sm font-normal ml-2">+39-055-123456</p>
          </a>
          <a href='#mail' className='flex items-center hover:text-orange-500 transition-all duration-200 ease-in'>
            <MdMailOutline /> <p className="text-sm font-normal ml-2">booking@patiotime.com</p>
          </a>
        </div>

        <div>
          <h3 className="text-md font-bold mt-3 mb-9">NEWSLETTER</h3>
          <p className=" text-sm font-light mb-2">Receive the latest news from us.</p>
          <form className='flex items-center'>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-2 mb-2 border-b-2 border-zinc-400 focus:outline-none focus:border-zinc-500"
            />
            <button>
              <HiOutlineArrowSmRight className='text-2xl hover:text-orange-600 transition-all duration-250 ease-in'/>
            </button>
            
          </form>
          <div className="flex items-center mt-4">
            <input type="checkbox" id="privacy-policy" className="mr-2" />
            <label htmlFor="privacy-policy" className="text-sm font-light">
              I agree to the Privacy Policy
            </label>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center border-t border-gray-700 mt-24 pt-20 text-center text-sm">
        <p className='font-light text-gray-400 opacity-95'>© Copyright PIATTO TOSCANO WordPress Theme for Restaurant & Cafe.</p>
        <div className="flex justify-between space-x-4">
          <a href="#" className="font-extralight tracking-wide hover:text-orange-500 transition-all duration-250 ease-in">PRIVACY</a>
          <a href="#" className="font-extralight tracking-wide hover:text-orange-500 transition-all duration-250 ease-in">TERM OF USE</a>
          <a href="#" className="font-extralight tracking-wide hover:text-orange-500 transition-all duration-250 ease-in">POLICY</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
