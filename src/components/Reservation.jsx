import React, { useState } from 'react';
import { Parallax } from 'react-parallax';

const Reservation = () => {
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
    <div className="relative h-[50vh] bg-black">
      <Parallax
        bgImage="https://images.unsplash.com/photo-1740830047012-506d1c6ffe03?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGhvdGVsJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
        bgImageAlt="Reservation Table"
        strength={100}
        className="h-[50vh] opacity-90"
      >
        <div className="flex flex-col justify-center items-center my-35 text-white">
          <div className="text-center">
            <div className="text-xl text-orange-600 font-bold tracking-wider flex items-center">
              <span className='w-22 h-[1.5px] bg-orange-500 mr-4'></span>
              ONLINE RESERVATION
              <span className='w-22 h-[1.5px] bg-orange-500 ml-4'></span>
            </div>
            <h1 className="text-5xl font-serif font-medium my-4">BOOK A TABLE</h1>
          </div>
          <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-10 mt-8">
            <div className="flex items-center">
              <select
                value={persons}
                onChange={(e) => setPersons(Number(e.target.value))}
                className="text-white border-b-[1.5px] border-gray-300 text-xl w-3xs font-extralight p-2 focus:outline-none focus:border-gray-300"
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
                className="text-white border-b-[1.5px] border-gray-300 text-xl w-3xs font-extralight p-2 focus:outline-none focus:border-gray-300"
              />
            </div>
            <div className="flex items-center">
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="text-white border-b-[1.5px] border-gray-300 text-xl w-3xs font-extralight p-2 focus:outline-none focus:border-gray-300"
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
      </Parallax>
    </div>
  );
};

export default Reservation;
