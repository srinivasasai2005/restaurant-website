import React from 'react'
import { Parallax } from 'react-parallax'
import Navbar from './../components/Navbar'
import Reservation from './../components/Reservation';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import Footer from './../components/Footer';


function ChefsPage() {
  return (
    <>
        {/* Parallax IMG */}
        <div className='relative bg-black'>
                <Parallax
                    bgImage="https://images.unsplash.com/photo-1643081268700-4ef1013ba090?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    bgImageAlt="Reservation Table"
                    strength={200}
                    className="h-[65vh] opacity-90">
                </Parallax>
                <Navbar />
                <div className='absolute top-[50%] left-1/2 transform -translate-x-1/2 text-white text-center'>
                    <div className='text-7xl font-serif font-extralight tracking-wider my-4'>
                        MEET OUR CHEFS
                    </div>
                </div>
        </div>

        {/* Chefs Section */}

        {/* Executive Chef */}
        <div className='max-w-[1240px] mx-auto my-24 p-4 flex flex-col md:flex-row items-center justify-center gap-14'>
            <div className='bg-black'>
                <img className='w-auto h-[85vh] object-cover opacity-95'
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/chef-3.jpg" 
                alt="Executive Chef" 
                />
            </div>
            <div className='w-full md:w-1/2 p-4'>

                <h3 className='text-lg font-bold mb-4 text-orange-600 tracking-wider'>OUR EXECUTIVE CHEF</h3>
                <h1 className='text-5xl font-extralight font-serif mb-6'>Alexander Petillo</h1>
                <p className='text-lg font-light mb-6 text-gray-700'>
                    Food is the foundation of true happiness. Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo.
                </p>
                <p className='text-lg font-light text-gray-700'>
                    We see our customers as invited guests to a party, and we are the hosts.
                    It’s our job every day to make every important aspect of the customer experience a little bit better.
                    Donec quam felis, ultricies nec, pellentesque eu.
                </p>

                <div className='flex items-center justify-start gap-5 my-8 text-2xl text-gray-600'>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600">
                        <FaTwitter />
                    </a>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600 ">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600 ">
                        <SiInstagram />
                    </a>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600 ">
                        <FaYoutube />
                    </a>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600">
                        <FaPinterest />
                    </a>
                </div>

                <button className="relative text-black text-md font-normal group pb-1">
                    LEARN MORE
                    <span className='absolute bottom-0 left-0 h-0.5 bg-orange-700 transition-all duration-300 w-full transform origin-right scale-x-100 group-hover:scale-x-0'></span>
                </button>

            </div>

        </div>

        {/* Quote IMG */}
        <div className='relative bg-black overflow-hidden'>
                <Parallax
                    bgImage="https://patiotime.loftocean.com/wp-content/uploads/2022/03/edward-howell-R8HoXig87p8-unsplash.jpg"
                    bgImageAlt="Reservation Table"
                    strength={200}
                    className="h-[55vh] object-fill opacity-40"
                   >
                </Parallax>
                
                <div className='absolute top-[30%] left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center justify-center'>
                    <RiDoubleQuotesL className='text-5xl text-orange-600' />
                    <div className='max-w-[800px] text-2xl font-serif font-extralight tracking-wider my-4 text-white'>
                        "A distinctive, well-preserved and comfortable space, high-quality products, authentic cuisine, food and drinks are done flawlessly."
                    </div>

                    <img className='w-80 h-12 my-4'
                    src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/chef-sig.png" 
                    alt="Chef Signature" 
                    />

                </div>
        </div>

        {/* All Chefs */}
        <div className='max-w-[1200px] mx-auto my-24 p-4 flex flex-col md:flex-row items-center justify-center gap-14'>
            <div>
                <div className='bg-black'>
                    <img className='w-full h-[50vh] object-cover opacity-95'
                    src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/team-2.jpg" 
                    alt="Sous Chef" 
                    />
                </div>

                <div className='text-left mt-4'>
                    <h4 className='text-sm font-bold text-orange-600 tracking-wider mb-2'>SOUS CHEF</h4>
                    <h1 className='text-3xl font-extralight font-serif mb-3 tracking-wide'>Lorenzo Morelli</h1>
                    <p className='text-md font-light text-gray-700'>
                        Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes,
                         nascetur mus.
                    </p>

                    <div className='flex items-center justify-start gap-5 my-3 text-xl text-gray-600'>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600">
                        <FaTwitter />
                    </a>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600">
                        <SiInstagram />
                    </a>
                    
                    </div>
                </div>

            </div>

            <div>
                <div className='bg-black'>
                    <img className='w-full h-[50vh] object-cover opacity-90'
                    src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/team-3.jpg" 
                    alt="Pastry Chef" 
                    />
                </div>

                <div className='text-left mt-4'>
                    <h4 className='text-sm font-bold text-orange-600 tracking-wider mb-2'>PASTRY CHEF</h4>
                    <h1 className='text-3xl font-extralight font-serif mb-3 tracking-wide'>Aaliyah Williams</h1>
                    <p className='text-md font-light text-gray-700'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                         Aenean commodo ligula eget dolor.
                          Aenean massa pretium quis, sem quis.
                    </p>

                    <div className='flex items-center justify-start gap-5 my-3 text-xl text-gray-600'>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600">
                        <FaTwitter />
                    </a>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600">
                        <SiInstagram />
                    </a>
                    
                    </div>
                </div>

            </div>

            <div>
                <div className='bg-black'>
                    <img className='w-full h-[50vh] object-cover opacity-95'
                    src="https://plus.unsplash.com/premium_photo-1677852417030-c835a3e1773c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" 
                    alt="Sous Chef" 
                    />
                </div>

                <div className='text-left mt-4'>
                    <h4 className='text-sm font-bold text-orange-600 tracking-wider mb-2'>SAUTÉ CHEF</h4>
                    <h1 className='text-3xl font-extralight font-serif mb-3 tracking-wide'>Lyon Blanchet</h1>
                    <p className='text-md font-light text-gray-700'>
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                         In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo
                    </p>

                    <div className='flex items-center justify-start gap-5 my-3 text-xl text-gray-600'>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600">
                        <FaTwitter />
                    </a>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="transition-all duration-300 hover:text-orange-600">
                        <SiInstagram />
                    </a>
                    
                    </div>
                </div>

            </div>
        </div>

        {/* Reservation */}
        <Reservation />

        {/* Footer */}
        <Footer />

    </>
  )
}

export default ChefsPage


