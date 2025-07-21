import React from 'react'
import { Parallax } from 'react-parallax';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function BlogPage() {
  return (
    <>
        {/* Parallax IMG */}
        <div className='relative bg-black'>
                <Parallax
                    bgImage='https://images.unsplash.com/photo-1686953377597-add6f7927f60?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudCUyMHRhYmxlc3xlbnwwfDB8MHx8fDA%3D'
                    bgImageAlt="Reservation Table"
                    strength={200}
                    className="h-[53vh] opacity-60">
                </Parallax>
                <Navbar />
                <div className='absolute top-[55%] left-1/2 transform -translate-x-1/2 text-white text-center'>
                    <div className='text-7xl font-serif font-extralight tracking-wider my-4'>
                        Latest News
                    </div>
                </div>
        </div>

        {/* Blog Content */}
        {/* 3 coloumn */}
        <div className='grid grid-cols-3 gap-14 p-10 max-w-[1300px] mx-auto my-10'>

            {/* Coloumn 1 */}
            <div className='overflow-hidden flex flex-col gap-10'>

                <div className='group pb-5 flex flex-col gap-4 overflow-hidden hover:-translate-y-2 transition-all duration-500'>
                    <div className='overflow-hidden'>
                        <img 
                        src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/vladimir-gladkov-FZeVHLm2f6Y-unsplash-1164x1536.jpg"
                        alt="Blog Post"
                            className='w-full h-auto group-hover:scale-105 transition-transform duration-500'
                        />
                    </div>
                    <h2 className='text-3xl font-serif font-normal'>Smoked Salmon Tart</h2>
                    <p className='text-gray-700 font-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    <button className='relative w-1/4 py-1 text-sm font-medium tracking-wide transition-all duration-500'>
                        READ MORE
                        <span className="absolute bottom-0 right-0 w-full h-0.5 bg-orange-700 transition-all duration-200 transform origin-right scale-x-100 group-hover:scale-x-0"></span>
                    </button>
                </div>

                <div className='group pb-5 flex flex-col gap-4 overflow-hidden hover:-translate-y-2 transition-all duration-500'>
                    <div className='overflow-hidden'>
                        <img 
                        src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/louis-hansel-5hhXK9mRYcQ-unsplash-1024x768.jpg"
                        alt="Blog Post"
                            className='w-full h-auto group-hover:scale-105 transition-transform duration-500'
                        />
                    </div>
                    <h2 className='text-3xl font-serif font-normal'>Food is the foundation of true happiness</h2>
                    <p className='text-gray-700 font-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    <button className='relative w-1/4 py-1 text-sm font-medium tracking-wide transition-all duration-500'>
                        READ MORE
                        <span className="absolute bottom-0 right-0 w-full h-0.5 bg-orange-700 transition-all duration-200 transform origin-right scale-x-100 group-hover:scale-x-0"></span>
                    </button>
                </div>

            </div>

            {/* Coloumn 2 */}
            <div className='overflow-hidden flex flex-col gap-10'>

                <div className='group pb-5 flex flex-col gap-4 overflow-hidden hover:-translate-y-2 transition-all duration-500'>
                    <div className='overflow-hidden'>
                        <img 
                        src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/alaksiej-carankievic-JBDYs80RTcs-unsplash-1057x1536.jpg"
                        alt="Blog Post"
                            className='w-full h-auto group-hover:scale-105 transition-transform duration-500'
                        />
                    </div>
                    <h2 className='text-3xl font-serif font-normal'>Wonderful Eating Experience</h2>
                    <p className='text-gray-700 font-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    <button className='relative w-1/4 py-1 text-sm font-medium tracking-wide transition-all duration-500'>
                        READ MORE
                        <span className="absolute bottom-0 right-0 w-full h-0.5 bg-orange-700 transition-all duration-200 transform origin-right scale-x-100 group-hover:scale-x-0"></span>
                    </button>
                </div>

                <div className='group pb-5 flex flex-col gap-4 overflow-hidden hover:-translate-y-2 transition-all duration-500'>
                    <div className='overflow-hidden'>
                        <img 
                        src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/emanuel-ekstrom-3-4eMmRBXjA-unsplash-1024x683.jpg"
                        alt="Blog Post"
                            className='w-full h-auto group-hover:scale-105 transition-transform duration-500'
                        />
                    </div>
                    <h2 className='text-3xl font-serif font-normal'>Swedish Meatballs & Mashed Potatoes</h2>
                    <p className='text-gray-700 font-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    <button className='relative w-1/4 py-1 text-sm font-medium tracking-wide transition-all duration-500'>
                        READ MORE
                        <span className="absolute bottom-0 right-0 w-full h-0.5 bg-orange-700 transition-all duration-200 transform origin-right scale-x-100 group-hover:scale-x-0"></span>
                    </button>
                </div>

            </div>

            {/* Coloumn 3 */}
            <div className='overflow-hidden flex flex-col gap-10'>

                <div className='group pb-5 flex flex-col gap-4 overflow-hidden hover:-translate-y-2 transition-all duration-500'>
                    <div className='overflow-hidden'>
                        <img 
                        src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/davide-cantelli-jpkfc5_d-DI-unsplash-1024x683.jpg"
                        alt="Blog Post"
                            className='w-full h-auto group-hover:scale-105 transition-transform duration-500'
                        />
                    </div>
                    <h2 className='text-3xl font-serif font-normal'>Piatto Toscano Restaurant Now Offering Brunch</h2>
                    <p className='text-gray-700 font-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    <button className='relative w-1/4 py-1 text-sm font-medium tracking-wide transition-colors duration-500'>
                        READ MORE
                        <span className="absolute bottom-0 right-0 w-full h-0.5 bg-orange-700 transition-all duration-200 transform origin-right scale-x-100 group-hover:scale-x-0"></span>
                    </button>
                </div>

                <div className='group pb-5 flex flex-col gap-4 overflow-hidden hover:-translate-y-2 transition-all duration-500'>
                    <div className='overflow-hidden'>
                        <img 
                        src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/annie-spratt-TQSB-suJu1k-unsplash-4-1022x1536.jpg"
                        alt="Blog Post"
                            className='w-full h-auto group-hover:scale-105 transition-transform duration-500'
                        />
                    </div>
                    <h2 className='text-3xl font-serif font-normal'>Love and food: It is all about spice</h2>
                    <p className='text-gray-700 font-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    <button className='relative w-1/4 py-1 text-sm font-medium tracking-wide transition-all duration-500'>
                        READ MORE
                        <span className="absolute bottom-0 right-0 w-full h-0.5 bg-orange-700 transition-all duration-200 transform origin-right scale-x-100 group-hover:scale-x-0"></span>
                    </button>
                </div>

            </div>
        </div>

        {/* Footer */}
        <Footer />
    </>
  )
}

export default BlogPage