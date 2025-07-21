import React from 'react'
import { Parallax } from 'react-parallax';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function BlogStandardPage() {
  return (
    <>
        {/* Parallax IMG */}
        <div className='relative bg-black'>
                <Parallax
                    bgImage='https://images.unsplash.com/photo-1714426071238-4c3fdb90dbb7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHJlc3RhdXJhbnQlMjB0YWJsZXN8ZW58MHwwfDB8fHww'
                    bgImageAlt="Reservation Table"
                    strength={200}
                    className="h-[53vh] opacity-60 object-cover">
                </Parallax>
                <Navbar />
                <div className='absolute top-[55%] left-1/2 transform -translate-x-1/2 text-white text-center'>
                    <div className='text-7xl font-serif font-extralight tracking-wider my-4'>
                        Blog Standard
                    </div>
                </div>
        </div>

        {/* Blog Content */}
        {/* 3 coloumn with 2 divs */}
        <div className='grid grid-cols-3 gap-16 p-10 max-w-[1300px] mx-auto my-10'>

            {/* Coloumn 1 */}
            <div className='overflow-hidden col-span-2 flex flex-col gap-10'>

                <div className='group pb-5 flex flex-col gap-4 overflow-hidden hover:-translate-y-2 transition-all duration-500'>
                    <div className='overflow-hidden'>
                        <img 
                        src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/davide-cantelli-jpkfc5_d-DI-unsplash-1024x683.jpg"
                        alt="Blog Post"
                            className='w-full h-auto group-hover:scale-105 transition-transform duration-500'
                        />
                    </div>
                    <h2 className='text-3xl font-serif font-normal'>Piatto Toscano Restaurant Now Offering Brunch</h2>
                    <p className='text-gray-700 font-light '>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quidem placeat tempore? Illum veritatis nemo harum vitae accusamus perspiciatis distinctio dolorem libero, neque inventore molestias asperiores tenetur ad provident facere voluptates minima cum possimus vero culpa sed animi. Officia unde autem sunt officiis qui inventore libero natus voluptatem et quae!
                    </p>
                    <button className='relative w-1/8 py-1 text-sm font-medium tracking-wide transition-colors duration-500'>
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
                    <p className='text-gray-700 font-light '>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quidem placeat tempore? Illum veritatis nemo harum vitae accusamus perspiciatis distinctio dolorem libero, neque inventore molestias asperiores tenetur ad provident facere voluptates minima cum possimus vero culpa sed animi. Officia unde autem sunt officiis qui inventore libero natus voluptatem et quae!
                    </p>
                    <button className='relative w-1/8 py-1 text-sm font-medium tracking-wide transition-colors duration-500'>
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
                    <p className='text-gray-700 font-light '>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quidem placeat tempore? Illum veritatis nemo harum vitae accusamus perspiciatis distinctio dolorem libero, neque inventore molestias asperiores tenetur ad provident facere voluptates minima cum possimus vero culpa sed animi. Officia unde autem sunt officiis qui inventore libero natus voluptatem et quae!
                    </p>
                    <button className='relative w-1/8 py-1 text-sm font-medium tracking-wide transition-colors duration-500'>
                        READ MORE
                        <span className="absolute bottom-0 right-0 w-full h-0.5 bg-orange-700 transition-all duration-200 transform origin-right scale-x-100 group-hover:scale-x-0"></span>
                    </button>
                </div>


            </div>

            {/* Coloumn 2 */}
            <div className='overflow-hidden flex flex-col gap-12'>

                <div className='flex flex-col gap-4'>
                    <h2 className='text-md font-medium tracking-wide'>OUR MISSION</h2>
                    <p className='text-gray-700 font-light'>
                        We see our customers as invited guests to a party, and we are the hosts.
                         It’s our job every day to make every important aspect of the customer experience a little bit better.
                    </p>
                </div>

                <div>
                    <h2 className='text-md font-medium tracking-wide'>CATEGORIES</h2>
                    <div className='flex flex-col gap-4 mt-8'>

                        <div className='relative overflow-hidden bg-black'>
                            <img 
                            src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvb2QlMjBzdG9yeXxlbnwwfDB8MHx8fDA%3D"
                            alt="Food story" 
                            className='w-full h-[10vh] object-cover opacity-90 hover:scale-105 transition-transform duration-300'
                            />
                            <h3 className='text-white text-sm font-medium absolute top-1/2 left-2/9 transform -translate-x-1/2 -translate-y-1/2'>
                            FOOD STORY
                            </h3>
                        </div>

                        <div className='relative overflow-hidden bg-black'>
                            <img 
                            src="https://images.unsplash.com/photo-1666600638841-4fe4a01ae260?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHJlc3RhdXJhbnQlMjB0YWJsZXN8ZW58MHwwfDB8fHww"
                            alt="Food story" 
                            className='w-full h-[10vh] object-cover opacity-90 hover:scale-105 transition-transform duration-300'
                            />
                            <h3 className='text-white text-sm font-medium absolute top-1/2 left-2/9 transform -translate-x-1/2 -translate-y-1/2'>
                            NEWS
                            </h3>
                        </div>

                        <div className='relative overflow-hidden bg-black'>
                            <img 
                            src="https://plus.unsplash.com/premium_photo-1679498535025-c2f53266d903?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHJlc3RhdXJhbnQlMjB0YWJsZXN8ZW58MHwwfDB8fHww"
                            alt="Food story" 
                            className='w-full h-[10vh] object-cover opacity-90 hover:scale-105 transition-transform duration-300'
                            />
                            <h3 className='text-white text-sm font-medium absolute top-1/2 left-2/9 transform -translate-x-1/2 -translate-y-1/2'>
                            RECIPIES
                            </h3>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <h2 className='text-md font-medium tracking-wide'>OPENING HOURS</h2>
                    <div>
                        <div className='flex justify-between mb-2'>
                            <p className="text-md font-light">Monday - Friday</p>
                            <p className="text-md font-light">09:00 - 22:00</p>
                        </div>
                        <div className='flex justify-between mb-2'>
                            <p className="text-md font-light">Saturday</p>
                            <p className="text-md font-light">11:00 - 00:00</p>
                        </div>
                        <div className='flex justify-between mb-5'>
                            <p className="text-md font-light">Sunday</p>
                            <p className="text-md font-light">11:00 - 23:00</p>
                        </div>
                    </div>
                    <div className='flex justify-around mb-2'>
                        <p className="text-md font-light">* Happy hour</p>
                        <p className="text-md font-light">17:00 - 21:00</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <h2 className='text-md font-medium tracking-wide'>LATESET POSTS</h2>

                    <div className='group relative overflow-hidden flex items-center gap-4'>
                            <div className='bg-black/80 w-1/3'>
                                <img 
                                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/vladimir-gladkov-FZeVHLm2f6Y-unsplash-1164x1536.jpg"
                                alt="Food story" 
                                className='w-full h-[10vh] object-cover transition-all duration-300'
                                />
                                <h3 className='text-white text-3xl font-serif font-bold absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-300'>
                                    1
                                </h3>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-md font-medium font-serif group-hover:text-orange-500 transition-all duration-300'>Smoked Salmon Tart</h3>
                                <p className='text-xs text-gray-500 font-normal'>MARCH 16, 2002</p>
                            </div>
                            
                    </div>

                    <div className='group relative overflow-hidden flex items-center gap-4'>
                            <div className='bg-black/80 w-1/3'>
                                <img 
                                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/alaksiej-carankievic-JBDYs80RTcs-unsplash-1057x1536.jpg"
                                alt="Food story" 
                                className='w-full h-[10vh] object-cover transition-all duration-300'
                                />
                                <h3 className='text-white text-3xl font-serif font-bold absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-300'>
                                    2
                                </h3>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-md font-medium font-serif group-hover:text-orange-500 transition-all duration-300'>Wonderful Eating Experience</h3>
                                <p className='text-xs text-gray-500 font-normal'>MARCH 16, 2002</p>
                            </div>
                            
                    </div>

                    <div className='group relative overflow-hidden flex items-center gap-4'>
                            <div className='bg-black/80 w-1/3'>
                                <img 
                                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/davide-cantelli-jpkfc5_d-DI-unsplash.jpg"
                                alt="Food story" 
                                className='w-full h-[10vh] object-cover transition-all duration-300'
                                />
                                <h3 className='text-white text-3xl font-serif font-bold absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-300'>
                                    3
                                </h3>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h3 className=' text-md font-medium font-serif group-hover:text-orange-500 transition-all duration-300'>Newly Offering Brunch</h3>
                                <p className='text-xs text-gray-500 font-normal'>MARCH 16, 2002</p>
                            </div>
                            
                    </div>

                </div>

            </div>

        </div>

        {/* Footer */}
        <Footer />
    </>
  )
}

export default BlogStandardPage