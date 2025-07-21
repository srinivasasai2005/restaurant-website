import React, { useState } from 'react'
import { Parallax } from 'react-parallax';
import Navbar from '../components/Navbar';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function OurStoryPage() {
  const [showMore, setShowMore] = useState(false); 
  return (
    <>
        {/* Parallax IMG */}
        <div className='relative bg-black'>
            <Parallax
                bgImage="https://media.istockphoto.com/id/1411971240/photo/wine-and-champain-glass-in-luxury-weddings-and-events.jpg?s=1024x1024&w=is&k=20&c=QteiNoNyCBAyt6Wix_cPSEAF29naM-2Xl_K83LM-ic4="
                bgImageAlt="Reservation Table"
                strength={200}
                className="h-[65vh] opacity-60">
            </Parallax>
            <Navbar />
            <div className='absolute top-[50%] left-1/2 transform -translate-x-1/2 text-white text-center'>
                <div className='text-xl text-white font-sans font-medium tracking-wider flex items-center justify-center'>
                    <span className='w-18 h-[1.5px] bg-white mr-4'></span>
                    THE STORY BEHIND
                    <span className='w-18 h-[1.5px] bg-white ml-4'></span>
                </div>
                <div className='text-7xl font-serif font-extralight tracking-wider my-4'>
                    OUR STORY
                </div>
            </div>
        </div>

        {/* Story Section */}
        <div className='max-w-[1050px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:pt-30 md:pb-0'>
            <div className='text-lg text-orange-600 font-sans font-bold tracking-widest flex items-center justify-center'>
                <span className='w-18 h-[1.5px] bg-white mr-4'></span>
                THE SECRET OF OUR SUCCESS
                <span className='w-18 h-[1.5px] bg-white ml-4'></span>
            </div>
            <div className='text-4xl font-serif font-light tracking-wider leading-14 text-center my-4'>
                A distinctive, well-preserved and comfortable space, high-quality products, authentic cuisine, food and drinks are done flawlessly.
            </div>
        </div>

        {/*  About Section */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Images - Stacked on mobile, side-by-side on larger screens */}
            <div className="flex-1 flex flex-col md:flex-row gap-6 lg:gap-8">
                <div className="relative flex-1">
                <img 
                    className="w-full h-[50vh] min-h-[300px] object-cover rounded-lg shadow-lg"
                    src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/klara-kulikova-gXmCinze3k8-unsplash.jpg" 
                    alt="Friends enjoying wine at our restaurant" 
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-500 w-16 h-16 rounded-full shadow-md hidden md:block"></div>
                </div>
                <div className="relative flex-1">
                <img 
                    className="w-full h-[65vh] min-h-[400px] object-cover rounded-lg shadow-lg mt-0 md:-mt-12"
                    src="https://plus.unsplash.com/premium_photo-1677852417030-c835a3e1773c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" 
                    alt="Our chef adding final touches to a dish" 
                />
                <div className="absolute -top-4 -left-4 bg-white w-16 h-16 rounded-full shadow-md hidden md:block"></div>
                </div>
            </div>

            {/* Text Content */}
            <div className='flex-1 flex flex-col justify-center items-start px-4 lg:px-0'>
                <div className="text-orange-500 text-lg font-medium tracking-widest mt-28 mb-4 flex items-center">
                QUALITY & BALANCE
                <span className='w-22 h-[1.5px] bg-orange-500 ml-4'></span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
                <span className="block">OUR FOOD</span>
                <span className="block">PHILOSOPHY</span>
                </h1>
                <p className="text-lg font-[250] text-gray-700 mb-8 leading-relaxed tracking-wider">
                Simple and balanced. Alexander Petillo brings together flavors and specialties from
                Italy and beyond to create his own culinary world, full of surprising artistry.
                </p>
                
                {/* Additional paragraph that appears on click */}
                {showMore && (
                    <p className="text-lg font-[250] text-gray-700 mb-8 leading-relaxed tracking-wider">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     A praesentium deserunt alias laboriosam quas dignissimos illo, voluptas obcaecati nostrum,
                      atque in cumque id et quasi quisquam, qui eos exercitationem aspernatur?
                    </p>
                )}
                
                <button 
                className="bg-orange-600 mb- text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                onClick={() => setShowMore(!showMore)}
                >
                {showMore ? "SHOW LESS" : "LEARN MORE"}
                </button>
            </div>
            </div>
        </div>

      {/*  About Section - 2 */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-10">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12"> {/* Changed to flex-row-reverse */}
          
          {/* Images - Now on the right side */}
          <div className="flex-1 flex flex-col md:flex-row gap-6 lg:gap-8">
            <div className="relative flex-1">
              <img 
                className="w-full h-[50vh] min-h-[300px] object-cover rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1651981075280-9a9e01acbff0?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Friends enjoying wine at our restaurant" 
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 w-16 h-16 rounded-full shadow-md hidden md:block"></div>
            </div>
            <div className="relative flex-1">
              <img 
                className="w-full h-[65vh] min-h-[400px] object-cover rounded-lg shadow-lg mt-0 md:-mt-12"
                src="https://images.unsplash.com/photo-1681219916722-bb698acc166a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww" 
                alt="Our chef adding final touches to a dish" 
              />
              <div className="absolute -top-4 -left-4 bg-white w-16 h-16 rounded-full shadow-md hidden md:block"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className='flex-1 flex flex-col justify-center items-end px-4 lg:px-0 text-right'>
            <div className="text-orange-500 text-lg font-medium tracking-widest mt-28 mb-4 flex items-center">
              <span className='w-22 h-[1.5px] bg-orange-500 mr-4'></span>
              RIGHT HERE WAITING
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6 ">
              <span className="block">VISIT OUR</span>
              <span className="block">RESTAURANT</span>
            </h1>
            <p className="text-lg font-[250] text-gray-700 mb-8 leading-relaxed tracking-wider">
              We see our customers as invited guests to a party, and we are the hosts. Piazza della Signoria, 1050122 . Firenze . Italy
              <span className="block">M: booking@patiotime.com</span>
              <span className="block">T: +39 055 1234567</span>
              
            </p>

          </div>
        </div>
      </div>

      {/*  Menu Tabs */}
      <div className='my-10 w-full'>
        {/* Menu Grid */}
        <div className="grid grid-cols-5 grid-rows-2 gap-4 h-[580px]  overflow-hidden"> 
          
          {/* Large left image with overlay */}
          <div className="col-span-2 row-span-2 overflow-hidden bg-zinc-900 relative group">
            <img 
              className='opacity-90 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/cta-bg-3.jpg" 
              alt="Restaurant dining area" 
            />
            <div className='absolute inset-0 flex flex-col justify-end items-start p-10 text-white bg-gradient-to-t from-black/50 to-transparent'>
              <h3 className='text-orange-600 text-sm font-bold tracking-widest mb-2'>RECOMMENDATIONS</h3>
              <h1 className='text-4xl font-serif font-medium mb-4'>NEW TASTINGS MENU</h1>
              <Link to={"menu"}>
              <button className='relative pb-1 text-sm font-medium tracking-wide transition-colors duration-300'>
                SPRING SPECIALS
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-orange-700 transition-all duration-300 transform origin-right scale-x-100 group-hover:scale-x-0"></span>
              </button>
              </Link>
            </div>
          </div>
          
          {/* Top middle image */}
          <div className="col-start-3 row-start-1 overflow-hidden bg-zinc-900 relative group">
            <img 
              className='opacity-90 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/cta-bg-4.jpg" 
              alt="Chef preparing food" 
            />
          </div>
          
          {/* Bottom middle text block */}
          <div className="col-start-3 row-start-2 overflow-hidden bg-zinc-900 relative group">
            <img 
              className='opacity-90 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/vladimir-gladkov-FZeVHLm2f6Y-unsplash-1440x1901.jpg" 
              alt="Chef preparing food" 
            />
          </div>
          
          {/* Top right text block */}
          <div className="col-start-4 row-start-1 overflow-hidden bg-zinc-900 relative group">
            <img 
              className='opacity-90 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/alaksiej-carankievic-JBDYs80RTcs-unsplash-1410x2048.jpg" 
              alt="Restaurant bar area" 
            />
          </div>
          
          {/* Bottom right image */}
          <div className="col-start-4 row-start-2 overflow-hidden bg-zinc-900 relative group">
            <img 
              className='opacity-90 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/cta-bg-5.jpg" 
              alt="Restaurant bar area" 
            />
          </div>
          
          {/* Far right column */}
          <div className="col-start-5 row-span-2 overflow-hidden bg-zinc-900 relative group">
            <img 
              className='opacity-95 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' // Changed to match other images
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/cta-bg-6-2.jpg" 
              alt="Wine selection" 
            />
            <div className='absolute inset-0 flex flex-col justify-end p-10 text-white bg-gradient-to-t from-black/50 to-transparent'>
              <h3 className='text-orange-500 text-sm font-bold tracking-widest mb-2'>WINE LIST</h3>
              <h1 className='text-3xl font-serif mb-4'>HAVE A DRINK</h1>
              <Link to={"menu"}>
              <button className='relative pb-1 text-sm font-medium tracking-wide transition-colors duration-300'>
                LEARN MORE
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-700 transition-all duration-300 transform origin-left scale-x-100 group-hover:scale-x-0"></span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
            <div className='max-w-[850px] mx-auto text-center'>
              <div className='text-lg text-orange-600 font-sans font-bold tracking-widest flex items-center justify-center'>
                <span className='w-18 h-[1.5px] bg-orange-600 mr-4'></span>
                TESTIMONIALS
                <span className='w-18 h-[1.5px] bg-orange-600 ml-4'></span>
              </div>
              <div className='text-5xl font-serif font-light tracking-wider leading-14 text-center my-4'>
                  WHAT PEOPLE SAY ABOUT US
              </div>
              <div className='text-lg font-[250] text-gray-700 mb-6 leading-relaxed tracking-wider text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, laudantium sunt sint rem laboriosam ab architecto unde voluptas hic ipsa soluta.
              </div>
            </div>


            {/* Testimonial swiper */}
            <div className="mt-10 relative">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                el: '.testimonial-pagination',
                type: 'bullets',
                }}
                
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }
                }}
              >
                {/* Testimonial Cards */}
                <SwiperSlide>
                  <div className='px-2 h-full mx-auto max-w-md text-center'>
                    <p className='text-6xl text-orange-600 font-light text-center'><i>"</i></p>
                    <p className='text-lg text-gray-700 mb-4 tracking-wide leading-7 font-serif'>Food is the foundation of true happines. Lorem ipsum dolor sit amerpet consecteur adipisicing elit..</p>

                    <img 
                    className='w-28 h-28 rounded-full mx-auto mb-4'
                    src="https://patiotime.loftocean.com/wp-content/uploads/2024/03/author-3-300x300.png" 
                    alt="testimonial card" 
                    />

                    <h4 className='text-lg text-zinc-900 font-normal tracking-normal'>John Doe</h4>
                    <p className='text-sm text-zinc-400 font-light'>Food Critic</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='px-2 h-full mx-auto max-w-md text-center'>
                    <p className='text-6xl text-orange-600 font-light text-center'><i>"</i></p>
                    <p className='text-lg text-gray-700 mb-4 tracking-wide leading-7 font-serif'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem perferendis obcaecati, laborum loreal intesf.
                    </p>

                    <img 
                    className='w-28 h-28 rounded-full mx-auto mb-4'
                    src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/quote-author-1.png" 
                    alt="testimonial card" 
                    />

                    <h4 className='text-lg text-zinc-900 font-normal tracking-normal'>John Doe</h4>
                    <p className='text-sm text-zinc-400 font-light'>Food Critic</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='px-2 h-full mx-auto max-w-md text-center'>
                    <p className='text-6xl text-orange-600 font-light text-center'><i>"</i></p>
                    <p className='text-lg text-gray-700 mb-4 tracking-wide leading-7 font-serif'>Food is the foundation of true happines. Lorem ipsum dolor sit amerpet consecteur adipisicing elit..</p>

                    <img 
                    className='w-28 h-28 rounded-full mx-auto mb-4'
                    src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/quote-author-3.jpg" 
                    alt="testimonial card" 
                    />

                    <h4 className='text-lg text-zinc-900 font-normal tracking-normal'>John Doe</h4>
                    <p className='text-sm text-zinc-400 font-light'>Food Critic</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='px-2 h-full mx-auto max-w-md text-center'>
                    <p className='text-6xl text-orange-600 font-light text-center'><i>"</i></p>
                    <p className='text-lg text-gray-700 mb-4 tracking-wide leading-7 font-serif'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem perferendis obcaecati, laborum loreal intesf..
                    </p>

                    <img 
                    className='w-28 h-28 rounded-full mx-auto mb-4'
                    src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/coffee-3.jpg" 
                    alt="testimonial card" 
                    />

                    <h4 className='text-lg text-zinc-900 font-normal tracking-normal'>John Doe</h4>
                    <p className='text-sm text-zinc-400 font-light'>Food Critic</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='px-2 h-full mx-auto max-w-md text-center'>
                    <p className='text-6xl text-orange-600 font-light text-center'><i>"</i></p>
                    <p className='text-lg text-gray-700 mb-4 tracking-wide leading-7 font-serif'>Food is the foundation of true happines. Lorem ipsum dolor sit amerpet consecteur adipisicing elit..</p>

                    <img 
                    className='w-28 h-28 rounded-full mx-auto mb-4'
                    src="https://patiotime.loftocean.com/wp-content/uploads/2024/03/author-3-300x300.png"
                     
                    alt="testimonial card" 
                    />

                    <h4 className='text-lg text-zinc-900 font-normal tracking-normal'>John Doe</h4>
                    <p className='text-sm text-zinc-400 font-light'>Food Critic</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='px-2 h-full mx-auto max-w-md text-center'>
                    <p className='text-6xl text-orange-600 font-light text-center'><i>"</i></p>
                    <p className='text-lg text-gray-700 mb-4 tracking-wide leading-7 font-serif'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem perferendis obcaecati, laborum loreal intesf..
                    </p>

                    <img 
                    className='w-28 h-28 rounded-full mx-auto mb-4'
                    src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/quote-author-3.jpg"
                    alt="testimonial card" 
                    />

                    <h4 className='text-lg text-zinc-900 font-normal tracking-normal'>John Doe</h4>
                    <p className='text-sm text-zinc-400 font-light'>Food Critic</p>
                  </div>
                </SwiperSlide>
                
                
              </Swiper>
               {/* Pagination Bullets */}
               {/* Custom Navigation Controls */}
               <div className="flex justify-center items-center mt-12">
                 <div className="testimonial-pagination flex justify-center items-center space-x-4"></div>
               </div>

            </div>

      </div>

      {/* Reservation Section */}
      <Reservation />

      {/* Footer Section */}
      <Footer />
    </>
  )
}

export default OurStoryPage