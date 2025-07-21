import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Reservation from '../components/Reservation'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1672673506558-e95e98b263c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU0fHxjbG9zZSUyMHVwJTIwb2YlMjBmb29kJTIwd2l0aCUyMGRhcmslMjB0aGVtZXxlbnwwfDB8MHx8fDA%3D',
      alt: 'Delicious marinara pizza',
    },
    {
      src: 'https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=KK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM=',
      alt: 'Tasty canapes',
    },
    {
      src: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/emanuel-ekstrom-3-4eMmRBXjA-unsplash-1024x683.jpg',
      alt: 'Fresh garden salad',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Section 1 - Background Images & Navbar */}
      <div className="relative w-full h-screen">
      {/* Background Images with Fade Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 z-0 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover absolute inset-0 transition-all duration-1000 ${
              index === activeImage 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-center items-center text-center z-20 px-4">
        {/* Heading with decorative lines */}
        <div className="text-white text-lg font-medium tracking-widest mt-28 mb-4 flex items-center">
          <span className='w-20 h-[1.5px] bg-white mr-4'></span>
          WELCOME TO PIATTO TOSCANO
          <span className='w-20 h-[1.5px] bg-white ml-4'></span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-tight animate-fadeIn delay-100">
          Delicious Food & Wonderful
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-tight mb-4 animate-fadeIn delay-200">
          Eating Experience
        </h1>
        <p className="text-xl font-medium text-white max-w-2xl mx-auto mb-10 animate-fadeIn delay-300">
          We Serve Food, Harmony, & Laughter Since 2014
        </p>

        <Link to={"/menu"}>
          <button className="bg-orange-600 text-white font-medium py-3 px-8 rounded-[10px] transition-all duration-300 hover:-translate-y-1 animate-ease delay-100">
            VIEW FULL MENUS
          </button>
        </Link>
        
      </div>

      {/* Navbar - Desktop Version Only */}
      <Navbar />
      </div>

      {/* Section 2 */}
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-26'>
        {/* Heading with decorative lines */}
        <div className="text-orange-500 text-lg font-medium tracking-widest mt-28 mb-4 flex items-center">
          REFRESH YOUR TASTE BUDS
          <span className='w-12 h-[1.5px] bg-orange-500 ml-4'></span>
        </div>

        {/* Content and Image Grid */}
        
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-gray-900 font-light mb-4 tracking-wide">
              Enjoy An Exceptional<br />
              <span className="font-medium">Journey Of Taste</span>
            </h2>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Text Content */}
          <div className='lg:w-1/2'>

            <p className="text-lg font-[250] text-gray-700 mb-8 leading-relaxed tracking-wider">
              We see our customers as invited guests to a party, and we are the hosts. It's our job every day to make every important aspect of the customer experience a little bit better.
            </p>

            <Link to={"/our-story"}>
            <button className="bg-orange-600 mb-26 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              DISCOVER MORE
            </button>
            </Link>

            <div className='h-[40vh] w-full overflow-hidden rounded-lg '>
              <img 
                className='h-full w-full object-cover'
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/davide-cantelli-jpkfc5_d-DI-unsplash-2048x1366.jpg"
                alt="Shrimp rolls" 
              />
            </div>
          </div>

          {/* Side Image */}
          <div className='lg:w-1/2 flex items-end'>
            <div className='absolute right-40 mb-0 h-[75vh] w-[30vw] overflow-hidden rounded-lg shadow-xl '>
              <img 
                className='h-full w-full object-cover '
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/img-10.jpg" 
                alt="Delicious food presentation" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Menu Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 - Starters */}
          <div className="space-y-10">

            <div className="mb-10 flex flex-col justify-center items-center">
              <h4 className="text-orange-500 text-sm font-medium tracking-wide mb-3">FRESH TASTE BUDS</h4>
              <h1 className="text-4xl sm:text-5xl tracking-wide text-gray-900 mb-6 font-serif">STARTERS</h1>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Purple Corn Tostada</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$36</span>
              </div>
              <p className="text-gray-600 mt-2">Ricotta, goat cheese, beetroot and datterini.</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Bruno's Scribble</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$30</span>
              </div>
              <p className="text-gray-600 mt-2">Culatello, Spalla Cofia, Mortadella, Culacciona.</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Fresh Oysters Dozen</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$59</span>
              </div>
              <p className="text-gray-600 mt-2">Our selection of fresh oysters, limes.</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Wild Mushroom Arancini</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$18</span>
              </div>
              <p className="text-gray-600 mt-2">Porcini purée, parmesan, basil.</p>
            </div>
          </div>

          {/* Column 2 - Main Dishes (Unchanged) */}
          <div className="space-y-10">
            <div className="mb-10 flex flex-col justify-center items-center">
              <h4 className="text-orange-500 text-sm font-medium tracking-wide mb-3">TOP RATED DISHES</h4>
              <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">MAIN DISHES</h1>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Crispy Skin Chicken</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$33</span>
              </div>
              <p className="text-gray-600 mt-2">Ricotta, radicchio, prosciutto salad, cabernet.</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Flank Steak</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$35</span>
              </div>
              <p className="text-gray-600 mt-2">Served medium rare, salad, mushroom sauce.</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Ebony Fillet Steak</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$58</span>
              </div>
              <p className="text-gray-600 mt-2">Truffle mash, pepper sauce.</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Fish & Chips</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$33</span>
              </div>
              <p className="text-gray-600 mt-2">Atlantic cod fillet, chips, salad, tartare, lemon.</p>
            </div>
          </div>

          {/* Column 3 - Drinks */}
          <div className="space-y-10">
            <div className="mb-10 flex flex-col justify-center items-center">
              <h4 className="text-orange-500 text-sm font-medium tracking-wide mb-3">DRINKS & WINES</h4>
              <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">BEVERAGES</h1>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Prickly Pear Tonic</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$12</span>
              </div>
              <p className="text-gray-600 mt-2">Prickly Pear, Chancaca, Key Lime, and Tonic</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Tommy's Margarita</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$13</span>
              </div>
              <p className="text-gray-600 mt-2">Tequila, fresh lime juice, and orange liqueur</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Chicha Morada</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$12</span>
              </div>
              <p className="text-gray-600 mt-2">Purple Corn, Pineapple, Apple, Cinnamon</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl text-gray-900">Better Boy</h3>
                <span className="flex-1 h-[1px] bg-zinc-300 mt-1 mx-2"></span>
                <span className="text-gray-900">$10</span>
              </div>
              <p className="text-gray-600 mt-2">Tomato, Salt, Black Pepper, Lemon</p>
            </div>
          </div>
        </div>

        {/* Button section */}
        <div className="flex gap-4 justify-center mt-10">
          <Link to={"/menu"}>
            <button className="border-2 border-zinc-700 px-8 py-2 text-[0.9rem] font-[350] rounded-lg hover:bg-zinc-900 hover:text-white hover:-translate-y-1 transition-all duration-200">
              BROWSE MENUS
            </button>
          </Link>

          <Link to={"/shop"}>
            <button className="border-2 border-zinc-700 px-8 py-2 text-[0.9rem] font-[350] rounded-lg hover:bg-zinc-900 hover:text-white hover:-translate-y-1 transition-all duration-200">
              ORDER ONLINE
            </button>
          </Link>
        </div>
      </div>

      {/* Section 4 - Menu Tabs */}
      <div className='my-10 w-full'>
        {/* Menu Grid */}
        <div className="grid grid-cols-5 grid-rows-2 gap-0 h-[580px] bg-zinc-900 overflow-hidden"> 
          
          {/* Large left image with overlay */}
          <div className="col-span-2 row-span-2 overflow-hidden relative group">
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
          <div className="col-start-3 row-start-1 overflow-hidden relative group">
            <img 
              className='opacity-90 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/cta-bg-4.jpg" 
              alt="Chef preparing food" 
            />
          </div>
          
          {/* Bottom middle text block */}
          <div className="col-start-3 row-start-2 text-white bg-zinc-950 flex flex-col justify-center items-center p-6 text-center group">
            <h3 className='text-orange-600 text-sm font-bold tracking-widest mb-2'>RECIPES</h3>
            <h1 className='text-2xl  font-serif '>OUR CHEF'S</h1>
            <h1 className='text-2xl font-serif mb-4'> SECRET</h1>

            <Link to={"blog-news"}>
            <button className='relative pb-1 text-sm font-medium tracking-wide transition-colors duration-300'>
              LEARN MORE
              <span className="absolute bottom-0 right-0 w-full h-0.5 bg-orange-700 transition-all duration-300 transform origin-right scale-x-100 group-hover:scale-x-0"></span>
            </button>
            </Link>
          </div>
          
          {/* Top right text block */}
          <div className="col-start-4 row-start-1 text-white bg-zinc-950 flex flex-col justify-center items-center p-6 text-center group">
            <h3 className='text-orange-600 text-sm font-bold tracking-widest mb-2'>A LA CARTE</h3>
            <h1 className='text-2xl  font-serif '>VIEW FULL</h1>
            <h1 className='text-2xl font-serif mb-4'>MENUS</h1>

            <Link to={"/menu"}>
            <button className='relative pb-1 text-sm font-medium tracking-wide transition-colors duration-300'>
              LEARN MORE
              <span className="absolute bottom-0 right-0 w-full h-0.5 bg-orange-700 transition-all duration-300 transform origin-right scale-x-100 group-hover:scale-x-0"></span>
            </button>
            </Link>
            
          </div>
          
          {/* Bottom right image */}
          <div className="col-start-4 row-start-2 overflow-hidden relative group">
            <img 
              className='opacity-90 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/cta-bg-5.jpg" 
              alt="Restaurant bar area" 
            />
          </div>
          
          {/* Far right column */}
          <div className="col-start-5 row-span-2 overflow-hidden relative group">
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
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-orange-700 transition-all duration-300 transform origin-right scale-x-100 group-hover:scale-x-0"></span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 - About Section */}
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

            <Link to={"meet-our-chefs"}>
            <button className="bg-orange-600 mb-26 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              LEARN MORE
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Section 6 - About Section - 2 */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
            <button className="bg-orange-600 mb-26 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              GET DIRECTIONS
            </button>
          </div>
        </div>
      </div>

      {/* Section 7 - Online Reservation */}
      <Reservation />

      {/* Section 8 - Footer */}
      <Footer />
    </>
  );
}

export default LandingPage;