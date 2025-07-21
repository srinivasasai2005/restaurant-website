import React, { useState } from 'react'
import { Parallax } from 'react-parallax';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ReservationDesk() {
    const [persons, setPersons] = useState(1);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
  const [time, setTime] = useState('9:00 AM');

  const times = [];
  let startTime = new Date();
  startTime.setHours(9, 0, 0, 0); // Start at 9:00 AM

  const endTime = new Date();
  endTime.setHours(23, 0, 0, 0); // End at 11:00 PM

  while (startTime <= endTime) {
    let hours = startTime.getHours();
    const minutes = startTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 (midnight) to 12
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    times.push(`${hours}:${minutesStr} ${ampm}`);
    startTime.setMinutes(startTime.getMinutes() + 30);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ persons, date, time });
  };
  return (
    <>
      {/* Parallax IMG */}
      <div className='relative bg-black'>
            <Parallax
                bgImage="https://images.unsplash.com/photo-1508253730651-e5ace80a7025?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFyfGVufDB8MHwwfHx8MA%3D%3D"
                bgImageAlt="Reservation Table"
                strength={200}
                className="h-[50vh] opacity-60">
            </Parallax>
            <Navbar />
      </div>

      {/* Reservation */}
      <div className="relative h-[50vh]">
        <div className="flex flex-col justify-center items-center my-30 text-white">
          <div className="text-center max-w-[900px]">
            <div className="text-xl text-orange-600 font-[600] tracking-widest flex justify-center items-center">
              <span className='w-22 h-[1px] bg-orange-500 mr-4'></span>
              ONLINE RESERVATION
              <span className='w-22 h-[1px] bg-orange-500 ml-4'></span>
            </div>
            <h1 className="text-6xl text-black/80 font-serif font-light tracking-wide my-6">BOOK A TABLE</h1>
            <p className='text-black/65 mb-4 text-lg'>Closed Sunday night, Mondays & Tuesdays. Due to the vast amount of no-shows,
               all bookings must now be secured with a credit card which will be charged $20 if you do not show up
                for your booking.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-10 mt-8">
            <div className="flex items-center">
              <select
                value={persons}
                onChange={(e) => setPersons(Number(e.target.value))}
                className="text-black/60 border-b-[1.5px] border-gray-300 text-lg w-3xs font-extralight p-2 focus:outline-none focus:border-gray-300"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} Person{num > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="text-black/60 border-b-[1.5px] border-gray-300 text-lg w-3xs font-extralight p-2 focus:outline-none focus:border-gray-300"
              />
            </div>
            <div className="flex items-center">
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="text-black/60 border-b-[1.5px] border-gray-300 text-lg w-3xs font-extralight p-2 focus:outline-none focus:border-gray-300"
              >
                {times.map((timeOption) => (
                  <option key={timeOption} value={timeOption}>
                    {timeOption}
                  </option>
                ))}
              </select>
            </div>
            <button className="bg-orange-600 text-white  text-sm font-light  py-2 px-16 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              BOOK NOW
            </button>
          </form>
        </div>
            
      </div>

      {/* Menu tabs */}
      <div className='mb-20 max-w-[1100px] mx-auto w-full'>
        {/* Menu Grid */}
        <div className="grid grid-cols-4 grid-rows-1 gap-3 h-[40vh] "> 
          
          {/* Large left image with overlay */}
          <div className="overflow-hidden bg-zinc-900 relative group h-full">
            <img 
              className='opacity-95 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/klara-kulikova-OK-BHu6OgtQ-unsplash.jpg" 
              alt="Restaurant dining area" 
            />
            <div className='absolute inset-0 flex flex-col justify-end items-center p-10 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent'>
              <div className='text-center max-w-2xl'>
                <h3 className='text-white text-xs font-bold tracking-wide mb-2'>RECOMMENDATIONS</h3>
                <h1 className='text-4xl font-serif font-light mb-4'>SPRING MENUS</h1>
                <button className='relative pb-1 text-xs font-medium tracking-wide transition-colors duration-300'>
                  DISCOVER MORE
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-700 transition-all duration-300 transform origin-left scale-x-100 group-hover:scale-x-0"></span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Top middle image */}
          <div className="overflow-hidden bg-zinc-900 -translate-y-20 relative group h-full">
            <img 
              className='opacity-95 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/klara-kulikova-I2t7NJNJHgs-unsplash.jpg" 
              alt="Restaurant dining area" 
            />
            <div className='absolute inset-0 flex flex-col justify-start items-center p-10 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent'>
              <div className='text-center max-w-2xl'>
                <h3 className='text-white text-xs font-bold tracking-wide mb-2'>SWEETS</h3>
                <h1 className='text-4xl font-serif font-light mb-4'>DESSERTS MENUS</h1>
                <button className='relative pb-1 text-xs font-medium tracking-wide transition-colors duration-300'>
                  DISCOVER MORE
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-700 transition-all duration-300 transform origin-left scale-x-100 group-hover:scale-x-0"></span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom middle text block */}
          <div className="overflow-hidden bg-zinc-900  relative group h-full">
            <img 
              className='opacity-95 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/klara-kulikova-f3ICj3QJkQA-unsplash.jpg" 
              alt="Restaurant dining area" 
            />
            <div className='absolute inset-0 flex flex-col justify-end items-center p-10 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent'>
              <div className='text-center max-w-2xl'>
                <h3 className='text-white text-xs font-bold tracking-wide mb-2'>BEVERAGES</h3>
                <h1 className='text-4xl font-serif font-medium mb-4'>WINE LISTS</h1>
                <button className='relative pb-1 text-xs font-medium tracking-wide transition-colors duration-300'>
                  DISCOVER MORE
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-700 transition-all duration-300 transform origin-left scale-x-100 group-hover:scale-x-0"></span>
                </button>
              </div>
            </div>
          </div>
          
          
          
          {/* Far right column */}
          <div className="overflow-hidden bg-zinc-900 -translate-y-20 relative group h-full">
            <img 
              className='opacity-95 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/klara-kulikova-oB68s9qJ87Q-unsplash.jpg" 
              alt="Restaurant dining area" 
            />
            <div className='absolute inset-0 flex flex-col justify-start items-center p-10 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent'>
              <div className='text-center max-w-2xl'>
                <h3 className='text-white text-xs font-bold tracking-wide mb-2'>FUNCTIONS</h3>
                <h1 className='text-4xl font-serif font-medium mb-4'>UPCOMING EVENTS</h1>
                <button className='relative pb-1 text-xs font-medium tracking-wide transition-colors duration-300'>
                  DISCOVER MORE
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-700 transition-all duration-300 transform origin-left scale-x-100 group-hover:scale-x-0"></span>
                </button>
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

export default ReservationDesk