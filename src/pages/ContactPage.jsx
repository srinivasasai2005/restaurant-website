import React from 'react'
import { Parallax } from 'react-parallax'
import Navbar from '../components/Navbar'
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import Footer from '../components/Footer'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <>
        {/* Parallax IMG */}
        <div className='relative bg-black'>
                <Parallax
                    bgImage="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhZmV8ZW58MHwwfDB8fHww"
                    bgImageAlt="Reservation Table"
                    strength={200}
                    className="h-[65vh] opacity-60">
                </Parallax>
                <Navbar />
                <div className='absolute top-[50%] left-1/2 transform -translate-x-1/2 text-white text-center'>
                    <div className='text-7xl font-light font-serif tracking-wider my-4'>
                        CONTACT US
                    </div>
                </div>
        </div>

        {/* Location Section */}
        <div className='max-w-[1240px] mx-auto my-24 p-4 flex flex-col md:flex-row items-center justify-center gap-14'>
                    
                    <div className='w-full md:w-1/2 p-4'>
        
                        <h3 className='text-lg font-bold mb-4 text-orange-600 tracking-wider'>OUR LOCATION</h3>
                        <h1 className='text-5xl font-extralight font-serif mb-6'>WHERE TO FIND US</h1>
                        <p className='text-lg font-light mb-6 text-gray-700'>
                            The Patio Time Cafe is located on Silk Street, in the heart of London city, on the edge of Soho.
                             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                               ultricies nec.
                        </p>
                        <p className='text-lg font-light mb-5 text-gray-700'>
                            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                             Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.
                        </p>

                        <div className='flex flex-col space-y-4 my-6'>
                            <a href='#adress' className='flex items-center mb-8 hover:text-orange-500 transition-all duration-200 ease-in'>
                            <MdLocationOn className='text-xl'/> <p className="text-md font-light ml-2">Silk St, Barbican, London EC2Y 8DS, UK</p>
                            </a>
                            <a href='#call' className='flex items-center mb-8 hover:text-orange-500 transition-all duration-200 ease-in'>
                            <IoCall className='text-xl' /> <p className="text-md font-light ml-2">+39-055-123456</p>
                            </a>
                            <a href='#mail' className='flex items-center hover:text-orange-500 transition-all duration-200 ease-in'>
                            <MdMailOutline className='text-xl' /> <p className="text-md font-light ml-2">booking@patiotime.com</p>
                            </a>
                        </div>
                                        
        
                    </div>

                    <div className='bg-black'>
                        <img className='w-auto h-[85vh] object-cover opacity-95'
                        src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/rezha-ramadhan-sV8M_Lkg60Y-unsplash.jpg" 
                        alt="Executive Chef" 
                        />
                    </div>
        
        </div>

        {/* Contact Section */}
        <div className="w-full h-[60vh] mx-auto px-6 py-16 my-10 font-sans bg-gray-50">

        {/* Contact Header */}
        <div className="grid md:grid-cols-2 px-30 gap-12">
            {/* Left Column - Contact Info */}
            <div>
                <div className="text-left mb-6">
                    <h2 className="text-lg font-bold text-orange-600 tracking-widest mb-4">GET IN TOUCH</h2>
                    <h1 className="text-5xl font-light font-serif ">CONTACT US</h1>
                </div>
                <div className="space-y-4">
                <div>
                    <p className="text-lg font-light text-gray-700 mb-1">
                        For general enquiries please email : 
                        <span className="text-lg hover:text-orange-600 transition-all duration-200 cursor-pointer"> info@patiotime.com</span>
                    </p>
                </div>

                <div>
                    <p className="text-lg font-light text-gray-700 mb-2">
                        Reserve by email :
                        <span className="text-lg hover:text-orange-600 transition-all duration-200 cursor-pointer"> booking@patiotime.com</span>
                    </p>
                    
                </div>

                <div>
                    <p className="text-lg font-light text-gray-700 mb-2">Tel :
                        <span className="text-lg"> +39 055 1234567</span>
                    </p>
                </div>

                <div className='space-y-2 mb-10'>
                    <h3 className="text-xl font-medium mb-4">Opening hours:</h3>
                    <p className="text-md font-light mb-1">Mon – Thu: 10:00 am – 01:00 am</p>
                    <p className='text-md font-light '>Fri – Sun: 10:00 am – 02:00 am</p>
                </div>

                <Link to={"/reservation-desk"}>
                <button className="relative tracking-wide text-black text-sm font-medium group pb-1">
                    ONLINE RESERVATION
                    <span className='absolute bottom-0 left-0 h-0.5 bg-orange-700 transition-all duration-300 w-full transform origin-right scale-x-100 group-hover:scale-x-0'></span>
                </button>
                </Link>
                </div>
            </div>

            {/* Right Column - Reservation Form */}
            <div className='pt-6'>
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 mb-1">Your name</label>
                    <input 
                    type="text" 
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1">Your email</label>
                    <input 
                    type="email" 
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                    />
                </div>
                </div>

                <div>
                <label className="block text-gray-700 mb-1">Subject</label>
                <input 
                    type="text" 
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                />
                </div>

                <div>
                <label className="block text-gray-700 mb-1">Your message (optional)</label>
                <textarea 
                    className="w-full border-b border-gray-300 py-2 h-24 focus:outline-none focus:border-black"
                />
                </div>

                <button 
                className="bg-orange-600 mb-6 text-sm text-white font-normal py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                type="submit"
                >
                    SUBMIT
                </button>
            </form>
            </div>
        </div>
        </div>

        {/* Reservation Section */}
        <div className='relative bg-black'>
                <Parallax
                    bgImage="https://patiotime.loftocean.com/wp-content/uploads/2022/03/newsletter-bg-1.jpg"
                    bgImageAlt="Reservation Table"
                    strength={200}
                    className="h-[60vh] opacity-50">
                </Parallax>
                <div className='absolute top-[25%] left-1/2 transform -translate-x-1/2 text-white text-center'>
                    <div className='text-xl font-bold tracking-wide mb-6'>
                        CONNECT WITH US & STAY TUNED
                    </div>
                    <div className='text-5xl font-light font-serif mb-8'>
                        Subscribe to our Newsletter
                    </div>
                    <p className='text-md font-light mb-6'>
                        If you would like to stay connected and be the first to know about our news, events, and exclusive offers, please sign up for our newsletter.
                         You can opt out at any time by clicking unsubscribe on the newsletter.
                    </p>
                    <form className='flex items-center justify-center'>
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="w-3/4 p-2 mb-2 border-b-2 border-zinc-400 focus:outline-none focus:border-zinc-400"
                        />
                        <button>
                            <HiOutlineArrowSmRight className='text-2xl hover:text-orange-600 transition-all duration-250 ease-in'/>
                        </button>
                        
                    </form>
                    <div className="flex items-center justify-center mt-4">
                    <input type="checkbox" id="privacy-policy" className="mr-2" />
                    <label htmlFor="privacy-policy" className="text-sm font-light">
                        I agree to the Privacy Policy
                    </label>
                    </div>
                </div>
        </div>

        {/* Footer */}
        <Footer />
    </>
  )
}

export default ContactPage