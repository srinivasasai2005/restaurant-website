import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import ptLogo from '../assets/pt-logo.svg';
import { IoFastFoodSharp } from "react-icons/io5";

function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { 
      name: "Pages", 
      path: "#",
      dropdown: [
        { name: "Our Story", path: "/our-story" },
        { name: "Meet Our Chefs", path: "/meet-our-chefs" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Reservation Desk", path: "/reservation-desk" },
      ]
    },
    { 
      name: 'Blog',
      path: '/blog-news',
      dropdown: [
        { name: 'Blog Standard', path: '/blog-standard' },
        { name: 'Blog News', path: '/blog-news' },
      ] 
    },
    { 
      name: 'Shop',
       path: '/shop',
       dropdown: [
        { name: 'Cart', path: '/cart' },
        { name: 'Checkout', path: '/checkout' },
        { name: 'My Account', path: '/accounts-login' },
       ]
       },
  ];

  const [showForm, setShowForm] = useState(false);
  const [setshowCart, setShowCart] = useState(false);

  // State for reservation form
  const [persons, setPersons] = useState(1);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('9:00 AM');
  const location = useLocation();

  // Generate time slots
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

  const handleShowCart = () => {
    setShowCart(!showCart);
  }

  const handleFindTable = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ persons, date, time });
    setShowForm(false);
  };

  return (
    <nav className="absolute top-[4rem] w-full flex justify-between items-center px-20 z-50">
      <Link to="/">
        <img
          src={ptLogo}
          alt="Restaurant logo"
          className="h-20 w-auto px-20 hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <ul className="flex gap-10 text-white text-[1.1rem] font-medium items-center">

        {navItems.map((item) => (
          <li key={item.name} className="group relative">
            <Link
              to={item.path}
              className="transition-colors duration-200 py-2 px-1"
            >
              {item.name}
              {item.dropdown && (
                <div className="absolute left-0 top-full mt-6 w-50 bg-black/85 shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-3 transition-all duration-400 z-50">
                  {item.dropdown.map((subItem) => (
                    <Link 
                      key={subItem.name} 
                      to={subItem.path} 
                      className="block px-4 py-2 text-[1rem] font-light cursor-pointer text-left hover:text-orange-600 transition-colors duration-200"
                    >
                      {subItem.name}
                    </Link>
                    
                  ))}
                </div>
              )}
            </Link>

           {/* {(item.name === 'Menu' || item.name === 'Shop') && showCart (
            <button 
            className=' ml-2 ' 
            onClic
            >
              <IoFastFoodSharp size={20}/>
            </button>
           )} */}


            <span
              className={`absolute -bottom-0.5 left-0 h-0.5 bg-orange-700 transition-all duration-300 ${
                (location.pathname === item.path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </li>
        ))}

        <li>
          <button
            className="border-b-2 border-orange-700 px-5 py-2 text-[0.9rem] font-[450] tracking-wide hover:bg-white hover:text-black hover:font-[400] hover:border-white hover:rounded-lg hover:mb-1 hover:-translate-y-1 transition-all duration-200 ease-in-out"
            onClick={handleFindTable}
          >
            FIND A TABLE
          </button>
        </li>
      </ul>

      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-3/4 max-w-4xl h-auto flex">
            <IoClose size="2em" 
              className="absolute -top-26 -right-30 text-white cursor-pointer"
              onClick={() => setShowForm(false)}
            />
            <div className="w-1/2">
              <img
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/cta-bg-4.jpg"
                alt="reservation background"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            <form onSubmit={handleSubmit} className="w-1/2 p-4 flex flex-col justify-center">
              <div className="text-lg font-medium text-left text-orange-600 mb-2">
                ONLINE RESERVATION
              </div>
              <div className="text-4xl font-light font-serif text-left mb-6">BOOK A TABLE</div>
              <div className="flex flex-col items-start space-y-7">
                <select
                  value={persons}
                  onChange={(e) => setPersons(Number(e.target.value))}
                  className="w-3/4 border-b border-gray-300 text-sm font-light p-2 focus:outline-none focus:border-gray-300 bg-transparent"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num} className="bg-white text-black">
                      {num} Person{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-3/4 border-b border-gray-300 text-sm font-light p-2 focus:outline-none focus:border-gray-300 bg-transparent"
                />
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-3/4 border-b border-gray-300 text-sm font-light p-2 focus:outline-none focus:border-gray-300 bg-transparent"
                >
                  {times.map((timeOption) => (
                    <option key={timeOption} value={timeOption} className="bg-white text-black">
                      {timeOption}
                    </option>
                  ))}
                </select>

                <button
                type="submit"
                className=" w-1/2 bg-orange-600 text-white px-4 py-2 rounded-md hover:-translate-y-1 transition-all duration-200 font-medium text-sm mt-6"
              >
                BOOK NOW
              </button>
              </div>
              
            </form>
          </div>
        </div>
      )}

      

    </nav>
  );
}

export default Navbar;