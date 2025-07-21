import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Navbar from '../components/Navbar'; 
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('STARTERS');
  const { items: cartItems, addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {transition: Slide});
  };

  const handleViewCart = () => {
    navigate('/cart'); 
  };

  const isItemInCart = (itemId) => {
    return cartItems.some(item => item.id === itemId);
  };

  const menuData = {
    STARTERS: [
      {
        id: '101',
        name: 'Purple Corn Tostada',
        price: '$36',
        description: 'Ricotta, goat cheese, beetroot and datterini.',
        image: 'https://media.istockphoto.com/id/1211904640/photo/mexican-ham-toast-also-called-tostadas-with-beans-and-cheese-on-wooden-background.jpg?s=612x612&w=0&k=20&c=PEI8-ETl9N-JE6SuhHozgH8eQy2u59UBUAYeYtDOfl0='
      },
      { 
        id: '102',
        name: 'Bruno\'s Scribble',
         price: '$30',
        description: 'Culatello, Spalla Cotta, Mortadella, Culacciona.',
        image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/04/mega-menu-1-300x300.jpg' },
      { 
        id: '103',
        name: 'Fresh Oysters Dozen',
        price: '$59',
        description: 'Our selection of fresh oysters, limes.',
        image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-oyster-600x600.jpg'
       },
      { 
        id: '104',
        name: 'Bread with Smoked Wagyu Butter',
        price: '$13',
        description: 'Sonoma Signature Miche sourdough, lava salt.',
        image: 'https://media.istockphoto.com/id/1466578258/photo/bowl-of-savory-hummus-with-toasted-bread.jpg?s=612x612&w=0&k=20&c=Z4tx0AHYdnyQfhPmc0uBR6w207u2stDodxo_ElQ4qFY='
      },
      { 
        id: '105',
        name: 'Sourdough Bread',
        price: '$8',
        description: 'Sonoma Signature Miche sourdough, lava salt.',
        image: 'https://media.istockphoto.com/id/2151506290/photo/bread-on-old-wooden-table.jpg?s=612x612&w=0&k=20&c=YifDVBltthZkE9_M_Cd5GFRVfKF_dH7yF6sRVN2AzS8='
      },
      { 
        id: '106',
        name: 'Wild Mushroom Arancini',
        price: '$18',
        description: 'Porcini purée, parmesan, basil.',
        image: 'https://media.istockphoto.com/id/1359017919/photo/clam-arancini.jpg?s=612x612&w=0&k=20&c=HQL6IMXRaa0XOGNA3jTKH20fDVRk1dMWKPvY1vNJNUY='
      },
      { 
        id: '107',
        name: 'Heirloom Tomato Bruschetta',
        price: '$14',
        description: 'Crispy sourdough topped with heirloom tomatoes, basil.',
        image: 'https://media.istockphoto.com/id/601393962/photo/tomato-bruschetta.jpg?s=612x612&w=0&k=20&c=v2FkFHFQ6jigXpyy2_W0j1NpvdNHN65Q1VPyeh6SEAY='
      },
      { 
        id: '108',
        name: 'Burrata with Roasted Beets',
        price: '$18',
        description: 'Creamy burrata cheese paired with roasted red beets.',
        image: 'https://media.istockphoto.com/id/506611876/photo/smoked-meat.jpg?s=612x612&w=0&k=20&c=7rJOsHOpZI1z73tUj-41HCF60MWAntFRxCW3vUbiUQs='
      },
    ],
    'MAIN COURSES': [
      { 
        id: '201',
        name: 'Caprese Con Mozzarella Di Bufala',
        price: '$12',
        description: 'Caprese salad with tomatoes and buffalo mozzarella.',
        image: 'https://media.istockphoto.com/id/538340403/photo/caprese-salad-italian-food.jpg?s=612x612&w=0&k=20&c=ocHpj55gffbdcsEK8KngeGlGk3pcaHmMubFc1urSSh0='
      },
      { 
        id: '202',
        name: 'Salt & Pepper Calamari',
        price: '$18',
        description: 'Squid, lime, soy mayo.',
        image: 'https://media.istockphoto.com/id/538896598/photo/seafood-soft-focus-image.jpg?s=612x612&w=0&k=20&c=M-Mq6Utkb_q3pPbenseXXcunprM4A3CY6JwW56a3Lug='
      },
      {
        id: '203',
        name: 'Wild Mushroom Arancini',
        price: '$20',
        description: 'Crispy risotto balls with porcini purée, parmesan, basil.',
        image: 'https://media.istockphoto.com/id/1920835559/photo/gourmet-vegetarian-salad.jpg?s=612x612&w=0&k=20&c=61h4S8b-KnKU1rOX42IzHhEEm-FDL2TXnwjCtKgHYSs='
      },
      { 
        id: '204',
        name: 'Coffee Cured & Smoked Duck Breast',
        price: '$25',
        description: 'Duck breasts, Carrot purée, silver beet.',
        image: 'https://media.istockphoto.com/id/1227279053/photo/homemade-smoked-duck-breast-served-with-a-variety-of-fruits.jpg?s=612x612&w=0&k=20&c=ixY9_s7TPBgj1Ci6NKymq3vfiE7yIHivOX0u3f4lPZY='
      },
      {
        id: '205',
        name: 'Grilled Ribeye Steak',
        price: "$36",
        description: "Juicy ribeye, grilled to perfection, with rosemary butter.",
        image: "https://media.istockphoto.com/id/528888185/photo/sliced-medium-rare-grilled-beef-steak.jpg?s=612x612&w=0&k=20&c=J0iGdsYF6x2OofXKrEY1lc0GOLuel1SGlzKYQ--i8AY="
      },
      {
        id: '206',
        name: "Pan-seared Salmon Fillet",
        price: "$28",
        description: "Served with dill cream, baby potatoes, and asparagus.",
        image: "https://media.istockphoto.com/id/471833217/photo/grilled-salmon.jpg?s=612x612&w=0&k=20&c=ic2NpudyksLDf810YcO-8XkH-KprLBqWBTYonuRWnOk="
      },
      {
        id: '207',
        name: "Vegetarian Lasagna",
        price: "$20",
        description: "Layered with eggplant, zucchini, bell peppers, and ricotta.",
        image: "https://media.istockphoto.com/id/2167000302/photo/lasagna.jpg?s=612x612&w=0&k=20&c=bbsc5dYyG8VaM-M90vtdvbJSbH5OG4dou8YQe6DzQys="
      },
      {
        id: '208',
        name: "Herb Roasted Chicken Supreme",
        price: "$24",
        description: "Marinated chicken breast with root vegetables and jus.",
        image: "https://media.istockphoto.com/id/1319935020/photo/chicken-supreme-recipe-gently-cooked-with-5-spices-sweet-potato-mousseline-peppers-cut-in-half.jpg?s=612x612&w=0&k=20&c=hj8PDyE-AErVflQFWryhRFNVKkAWOu_MY6uZbjMm7VI="
      }

    ],
    SIDES: [
      {
        id: '301',
        name: "Garlic Parmesan Fries",
        price: "$8",
        description: "Hand-cut fries tossed with garlic and parmesan cheese.",
        image: "https://media.istockphoto.com/id/1485826992/photo/seafood.jpg?s=612x612&w=0&k=20&c=xxTQKLutK-NClt6eku_HbX3dSfCm7YNr3fM0G3HmjwY="
      },
      {
        id: '302',
        name: "Seasonal Roasted Vegetables",
        price: "$10",
        description: "A mix of freshly roasted seasonal vegetables.",
        image: "https://media.istockphoto.com/id/1169705960/photo/lamb-skewers-with-curry-rice-and-different-vegetables.jpg?s=612x612&w=0&k=20&c=oGp_WvXmgFUdeQd0bDxwh0b0rvH30Y31kYOS4gjbtEs="
      },
      {
        id: '303',
        name: "Truffle Mashed Potatoes",
        price: "$12",
        description: "Creamy mashed potatoes infused with truffle oil.",
        image: "https://media.istockphoto.com/id/886731970/photo/mashed-potatoes-on-white-concrete-background.jpg?s=612x612&w=0&k=20&c=2gUCBxxr4SB1CiILOh_UhrCz2hPRTIdO3lrHcPLQzrY="
      },
      {
        id: '304',
        name: "Steamed Asparagus",
        price: "$11",
        description: "Tender steamed asparagus finished with sea salt.",
        image: "https://media.istockphoto.com/id/851979152/photo/freshly-cooked-asparagus-appetizer-with-pine-nuts-and-cranberries-on-white-plate-square-format.jpg?s=612x612&w=0&k=20&c=rPvk8-MZztJCZMQustu1Dd9QoYsT8cN57Bh5qZmsOrE="
      },
      {
        id: '305',
        name: "Sautéed Spinach with Garlic",
        price: "$9",
        description: "Fresh spinach sautéed with garlic and olive oil.",
        image: "https://media.istockphoto.com/id/1289169211/photo/organic-winter-chard-salad-almonds-healthy-meals-turkish-name-bademli-paz.jpg?s=612x612&w=0&k=20&c=u4ioKH824b0Bt4sR5B_QtEQ64cAh271raB-2437aRrg="
      },
      {
        id: '306',
        name: "Sweet Potato Wedges",
        price: "$9",
        description: "Crispy sweet potato wedges, served with aioli.",
        image: "https://media.istockphoto.com/id/1398179188/photo/plated-dinner-of-grilled-ham-steak-with-sweet-potato-and-chopped-broccoli-in-a-white-plate-on.jpg?s=612x612&w=0&k=20&c=IZNYHne-UmPNhGKWGAXXWyvJPr0EfMsAyNq6y4XGGBo="
      },
      {
        id: '307',
        name: "Crispy Onion Rings",
        price: "$7",
        description: "Golden battered onion rings, served with dip.",
        image: "https://media.istockphoto.com/id/1280227386/photo/onion-rings-with-ketchup-on-white-background.jpg?s=612x612&w=0&k=20&c=gWtYr-nQnJt9gh7cWt3b0Vq8AOOgc8-DlvHhvMiASaI="
      },
      {
        id: '308',
        name: "Caesar Side Salad",
        price: "$8",
        description: "Crisp romaine, parmesan, croutons, Caesar dressing.",
        image: "https://media.istockphoto.com/id/1179515570/photo/caesar-salad-vegetable-salad-with-roast-chicken-meat-on-wooden-background.jpg?s=612x612&w=0&k=20&c=jCilEAejAwlsKmrV6txsTTGKenjLXVE-qp93JaWyHaM="
      }
    ],
    DESSERTS: [
      {
        id: '401',
        name: "Classic Tiramisu",
        price: "$11",
        description: "Espresso-soaked ladyfingers, mascarpone, cocoa.",
        image: "https://media.istockphoto.com/id/1223023808/photo/italian-tiramisu-dessert-on-a-black-background.jpg?s=612x612&w=0&k=20&c=prFv4k_kHwe0tm9rVVPI8fwZnoY4We_D__QqR4ydVO8="
      },
      {
        id: '402',
        name: "Chocolate Lava Cake",
        price: "$12",
        description: "Warm chocolate cake with a melting center.",
        image: "https://media.istockphoto.com/id/1435338767/photo/chocolate-cake-desert-that-has-been-cut.jpg?s=612x612&w=0&k=20&c=sJ8PQxMNPjgrR5hHKyvaeTj6Tj-hyRMtWh6qTTVorOI="
      },
      {
        id: '403',
        name: "Lemon Panna Cotta",
        price: "$10",
        description: "Creamy Italian dessert topped with lemon zest.",
        image: "https://media.istockphoto.com/id/2005190596/photo/lemon-and-yogurt-mousse-with-cookie-powder-on-top.jpg?s=612x612&w=0&k=20&c=-HC1dLORtYNdnT3ku06yhCR5hoJ7SCPAgsoNn1-Flak="
      },
      {
        id: '404',
        name: "Mixed Berry Pavlova",
        price: "$12",
        description: "Crispy meringue, whipped cream, and fresh berries.",
        image: "https://media.istockphoto.com/id/1135592220/photo/top-view-on-new-zealand-pavlova-cake-with-whipped-cream-and-mix-of-fresh-berries-on-a-blue.jpg?s=612x612&w=0&k=20&c=A7AAPlbcJGn1taJOZrhhQQrgeeOySz0d_qR3PJnLqVQ="
      },
      {
        id: '405',
        name: "Crème Brûlée",
        price: "$13",
        description: "Rich vanilla custard, caramelized sugar topping.",
        image: "https://media.istockphoto.com/id/1226354271/photo/creme-brulee.jpg?s=612x612&w=0&k=20&c=hlZBD2Di14itY3h5b3zQpQEADnXMeyxt3hxXCWgw_Xs="
      },
      {
        id: '406',
        name: "Raspberry Cheesecake",
        price: "$11",
        description: "Creamy cheesecake topped with raspberry coulis.",
        image: "https://media.istockphoto.com/id/466197927/photo/cheesecake-with-raspberries.jpg?s=612x612&w=0&k=20&c=ulTBlTpiOdhJWr-Rcb9IUEAptq4FLyFFFZF6CU3jXgA="
      },
      {
        id: '407',
        name: "Pistachio Gelato",
        price: "$9",
        description: "House-made pistachio gelato, two scoops.",
        image: "https://media.istockphoto.com/id/2163683732/photo/sweet-ice-cream-with-mint-and-chocolate.jpg?s=612x612&w=0&k=20&c=ieRG9Z9o-l_vAxysxRfwrnRD24QkKDiIdKA5TcBXp5M="
      },
      {
        id: '408',
        name: "Warm Apple Crumble",
        price: "$12",
        description: "Baked apples with cinnamon oat crumble, vanilla ice cream.",
        image: "https://media.istockphoto.com/id/450867011/photo/apple-walnut-streusel-cake.jpg?s=612x612&w=0&k=20&c=JXtQxQJuwLj_H7QLKP-g78gZ45anYIuVfw_nczi8lBQ="
      }
    ],
    WINES: [
      {
        id: '501',
        name: "Pinot Noir",
        price: "$38",
        description: "Light-bodied red wine with cherry and spice notes, gently earthy and elegant.",
        image: "https://media.istockphoto.com/id/173597966/photo/wine-composition.jpg?s=612x612&w=0&k=20&c=jZdHCu0WfOKl5SYmcMxEVXHfKrCJvI5W8Kgh99YnS5k="
      },
      {
        id: '502',
        name: "Cabernet Sauvignon",
        price: "$42",
        description: "Full-bodied with blackcurrant, cedar, and spice.",
        image: "https://media.istockphoto.com/id/2180157799/photo/red-wine-and-blue-grapes-on-a-black-reflective-background.jpg?s=612x612&w=0&k=20&c=cVE9IOuCIr6dN4gfbrmR62wFSFcY1FxRgDOUdv1995A="
      },
      {id: '503',
        name: "Malbec",
        price: "$36",
        description: "Rich, robust red wine with ripe blackberry, plum.",
        image: "https://images.unsplash.com/photo-1733248113910-400496b9a544?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fFdpbmVzfGVufDB8MnwwfHx8MA%3D%3D"
      },
      {
        id: '504',
        name: "Chardonnay",
        price: "$34",
        description: "Medium- to full-bodied white wine. Notes of apple, citrus, hint of oak.",
        image: "https://images.unsplash.com/photo-1575336979184-90df24528dfe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2luZXN8ZW58MHwyfDB8fHww"
      },
      {
        id: '505',
        name: "Sauvignon Blanc",
        price: "$32",
        description: "Crisp and refreshing with citrus, green apple, and grass aromas..",
        image: "https://images.unsplash.com/photo-1681281088269-57c68d14c559?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbmVzfGVufDB8MnwwfHx8MA%3D%3D"
      },
      {
        id: '506',
        name: "Prosecco",
        price: "$29",
        description: "Italian sparkling wine with lively bubbles and flavors of pear, apple. Perfect for celebrations.",
        image: "https://images.unsplash.com/photo-1685275771294-075e4f4baf03?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdpbmVzfGVufDB8MnwwfHx8MA%3D%3D"
      },
      {
        id: '507',
        name: "Riesling",
        price: "$31",
        description: "Aromatic white wine, fresh with notes of apricot. Great with spicy and Asian dishes.",
        image: "https://images.unsplash.com/photo-1644302405988-e35298bfe07d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdpbmVzfGVufDB8MnwwfHx8MA%3D%3D"
      },
      {
        id: '508',
        name: "Tosaca Rosso",
        price: "$27",
        description: "Dry, fresh style with notes of strawberry and melon. Great with salmon",
        image: "https://images.unsplash.com/photo-1719505400700-979540262199?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdpbmVzfGVufDB8MnwwfHx8MA%3D%3D"
      }
    ],
  };

  return (
    <>
      {/* Parallax IMG */}
      <div className='relative bg-black'>
            <Parallax
                bgImage='https://patiotime.loftocean.com/wp-content/uploads/2022/03/davide-cantelli-jpkfc5_d-DI-unsplash-1920x1281.jpg'
                bgImageAlt="Reservation Table"
                strength={200}
                className="h-[65vh] opacity-60">
            </Parallax>
            <Navbar />
            <div className='absolute top-[50%] left-1/2 transform -translate-x-1/2 text-white text-center'>
                <div className='text-xl text-white font-sans font-medium tracking-wider flex items-center justify-center'>
                    <span className='w-18 h-[1.5px] bg-white mr-4'></span>
                    À LA CARTE MENU
                    <span className='w-18 h-[1.5px] bg-white ml-4'></span>
                </div>
                <div className='text-7xl font-serif font-extralight tracking-wider my-4'>
                    OUR MENU
                </div>
            </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-[1200px] mx-auto p-5 my-18">
        <div className="flex justify-center gap-8 pb-4 mb-8">
        {Object.keys(menuData).map((category) => (
            <div key={category} className="relative group">
            <h2
                className={`cursor-pointer pb-2 text-md font-medium ${
                activeCategory === category ? 'text-black' : 'text-black hover:text-blcack opacity-70'
                }`}
                onClick={() => setActiveCategory(category)}
            >
                {category.replace(/_/g, ' ')}
            </h2>
            <span
                className={`absolute bottom-0.5 right-0 h-0.5 bg-orange-700 transition-all duration-300 ${
                activeCategory === category ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
            ></span>
            </div>
            ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuData[activeCategory].map((item, index) => (
            <div
            key={index.id}
            className="flex justify-between items-start gap-4 border-b border-gray-200 pb-4 mb-4 group"
            >

            <div className='bg-black overflow-hidden rounded-lg'>
                <img src={item.image} alt={item.name} className="w-auto h-20 object-cover relative" />
            </div>
            <div className="flex flex-col items-start">
                <h3 className="text-black opacity-95 text-[1.4rem] font-serif tracking-normal pb-1">{item.name}</h3>
                <p className="text-sm text-black font-light opacity-70">{item.description}</p>
            </div>
            <div className="flex flex-col items-end ml-auto">
                <p className="text-black opacity-95 font-medium font-serif tracking-widest mb-1.5">{item.price}</p>
                <button
                className="text-sm font-normal text-white bg-black px-4 py-0.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-orange-700 hover:text-white hover:-translate-y-0.5 transition-all duration-300 ease-in"
                onClick={() => isItemInCart(item.id) ? handleViewCart() : handleAddToCart(item)}
                >
                  {isItemInCart(item.id) ? 'VIEW CART' : 'ADD TO CART'}
                </button>
            </div>
            </div>
            ))}
        </div>

      </div>

      {/* Reservation Section */}
      <Reservation />
      
      {/* Testimonial Section - 1  */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
            {/* Images Section - Grid Layout */}
            <div className="grid grid-cols-2 gap-2 lg:gap-2 flex-1">
            <img 
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/img-37.jpg" 
                alt="Restaurant interior" 
                className="w-full h-auto object-cover"
            />
            <img 
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/img-38.jpg" 
                alt="Dining experience" 
                className="w-full h-auto object-cover"
            />
            <img 
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/img-39.jpg" 
                alt="Chef preparing food" 
                className="w-full h-auto object-cover"
            />
            <img 
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/choi-sungwoo-mvTvOFa-hQ4-unsplash.jpg" 
                alt="Restaurant ambiance" 
                className="w-full h-auto object-cover"
            />
            </div>

            {/* Text Content */}
            <div className='flex-1 flex flex-col justify-center items-start px-4 lg:px-0'>
                <div className="text-orange-500 text-lg font-medium tracking-widest mb-4 flex items-center">
                TESTIMONIALS
                <span className='w-16 h-0.5 bg-orange-500 ml-4'></span>
                </div>
            
                <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-6">
                    <span className="block">WHAT PEOPLE</span>
                    <span className="block">ARE SAYING</span>
                </h1>
            
                <p className="text-lg font-light text-gray-700 mb-8 leading-relaxed">
                    We serve food, harmony, and laughter. Making delicious food and providing a wonderful eating experience since 1998.
                </p>
            
                <Link to={"/our-story"}>
                  <button className="relative text-black font-normal group pb-1">
                      LEARN MORE
                      <span className='absolute bottom-0 left-0 h-0.5 bg-orange-700 transition-all duration-300 w-full transform origin-right scale-x-100 group-hover:scale-x-0'></span>
                  </button>
                </Link>
            </div>
        </div>
      </div>

      {/* Directions Section - 2 */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12"> {/* Changed to flex-row-reverse */}
          
          {/* Images - Now on the right side */}
          <div className="flex-1 flex flex-col md:flex-row gap-6 lg:gap-8">
            <div className="relative flex-1">
              <img 
                className="w-full h-[50vh] min-h-[300px] object-cover rounded-lg shadow-lg"
                src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/img-8-2.jpg" 
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
            <button className="relative text-black font-normal group pb-1">
                GET DIRECTIONS
                <span className='absolute bottom-0 left-0 h-0.5 bg-orange-700 transition-all duration-300 w-full transform origin-right scale-x-100 group-hover:scale-x-0'></span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default MenuPage;
