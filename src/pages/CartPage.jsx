import React from "react";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Parallax } from 'react-parallax';
import { useNavigate } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";

function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    total,
    addToCart,
  } = useCart();

  const navigate = useNavigate();
  const [tempQuantities, setTempQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    items.forEach(item => {
      initialQuantities[String(item.id)] = item.quantity;
    });
    setTempQuantities(initialQuantities);
  }, [items]);

    const handleTempQuantityChange = (id, newQty) => {
    if (newQty < 1) return;
    setTempQuantities(prev => ({ ...prev, [String(id)]: newQty }));
  };

  const handleUpdateCart = () => {
    for (const id in tempQuantities) {
      const quantity = tempQuantities[id];
      updateQuantity(id, quantity); // id is a string, make sure CartContext handles either; or coerce as needed
    }
  };

  const handleViewShop = () => navigate('/shop');
  const handleViewCart = () => navigate('/cart');
  const handleViewMenu = () => navigate('/menu');
  const handleCheckout = () => navigate('/checkout');
  const isItemInCart = (id) => items.some(item => item.id === id);

  // Example product data (normally import or fetch this)
  const menuItems = [
    { id: 1, name: 'Margherita Pizza', price: '$29.00', rating: 4, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-6-550x550.jpg', onSale: false },
    { id: 2, name: 'Spicy Seafood Pasta', price: '$29.00', rating: 5, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-7-550x550.jpg', onSale: false },
    { id: 3, name: 'Pasta Bolognese', price: '$26.00', rating: 3, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/04/product-13-550x550.jpg', onSale: true },
    { id: 4, name: 'Fettuccine Bolognese', price: '$22.00', rating: 4, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/04/product-14-550x550.jpg', onSale: false },
    { id: 5, name: 'Mushroom Bolognese Pasta', price: '$19.99', rating: 4, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-9-550x550.jpg', onSale: true },
    { id: 6, name: 'Spaghetti Napoletana', price: '$24.99', rating: 5, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-8-550x550.jpg', onSale: false },
    { id: 7, name: 'Vegetable Salad', price: '$16.00', rating: 3, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-5-550x550.jpg', onSale: false },
    // STARTERS
  {
    id: '101',
    name: 'Purple Corn Tostada',
    price: '$36',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1211904640/photo/mexican-ham-toast-also-called-tostadas-with-beans-and-cheese-on-wooden-background.jpg?s=612x612&w=0&k=20&c=PEI8-ETl9N-JE6SuhHozgH8eQy2u59UBUAYeYtDOfl0=',
    onSale: false
  },
  {
    id: '102',
    name: "Bruno's Scribble",
    price: '$30',
    rating: 4,
    image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/04/mega-menu-1-300x300.jpg',
    onSale: false
  },
  {
    id: '103',
    name: 'Fresh Oysters Dozen',
    price: '$59',
    rating: 4,
    image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-oyster-600x600.jpg',
    onSale: false
  },
  {
    id: '104',
    name: 'Bread with Smoked Wagyu Butter',
    price: '$13',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1466578258/photo/bowl-of-savory-hummus-with-toasted-bread.jpg?s=612x612&w=0&k=20&c=Z4tx0AHYdnyQfhPmc0uBR6w207u2stDodxo_ElQ4qFY=',
    onSale: false
  },
  {
    id: '105',
    name: 'Sourdough Bread',
    price: '$8',
    rating: 4,
    image: 'https://media.istockphoto.com/id/2151506290/photo/bread-on-old-wooden-table.jpg?s=612x612&w=0&k=20&c=YifDVBltthZkE9_M_Cd5GFRVfKF_dH7yF6sRVN2AzS8=',
    onSale: false
  },
  {
    id: '106',
    name: 'Wild Mushroom Arancini',
    price: '$18',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1359017919/photo/clam-arancini.jpg?s=612x612&w=0&k=20&c=HQL6IMXRaa0XOGNA3jTKH20fDVRk1dMWKPvY1vNJNUY=',
    onSale: false
  },
  {
    id: '107',
    name: 'Heirloom Tomato Bruschetta',
    price: '$14',
    rating: 4,
    image: 'https://media.istockphoto.com/id/601393962/photo/tomato-bruschetta.jpg?s=612x612&w=0&k=20&c=v2FkFHFQ6jigXpyy2_W0j1NpvdNHN65Q1VPyeh6SEAY=',
    onSale: false
  },
  {
    id: '108',
    name: 'Burrata with Roasted Beets',
    price: '$18',
    rating: 4,
    image: 'https://media.istockphoto.com/id/506611876/photo/smoked-meat.jpg?s=612x612&w=0&k=20&c=7rJOsHOpZI1z73tUj-41HCF60MWAntFRxCW3vUbiUQs=',
    onSale: false
  },

  // MAIN COURSES
  {
    id: '201',
    name: 'Caprese Con Mozzarella Di Bufala',
    price: '$12',
    rating: 4,
    image: 'https://media.istockphoto.com/id/538340403/photo/caprese-salad-italian-food.jpg?s=612x612&w=0&k=20&c=ocHpj55gffbdcsEK8KngeGlGk3pcaHmMubFc1urSSh0=',
    onSale: false
  },
  {
    id: '202',
    name: 'Salt & Pepper Calamari',
    price: '$18',
    rating: 4,
    image: 'https://media.istockphoto.com/id/538896598/photo/seafood-soft-focus-image.jpg?s=612x612&w=0&k=20&c=M-Mq6Utkb_q3pPbenseXXcunprM4A3CY6JwW56a3Lug=',
    onSale: false
  },
  {
    id: '203',
    name: 'Wild Mushroom Arancini',
    price: '$20',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1920835559/photo/gourmet-vegetarian-salad.jpg?s=612x612&w=0&k=20&c=61h4S8b-KnKU1rOX42IzHhEEm-FDL2TXnwjCtKgHYSs=',
    onSale: false
  },
  {
    id: '204',
    name: 'Coffee Cured & Smoked Duck Breast',
    price: '$25',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1227279053/photo/homemade-smoked-duck-breast-served-with-a-variety-of-fruits.jpg?s=612x612&w=0&k=20&c=ixY9_s7TPBgj1Ci6NKymq3vfiE7yIHivOX0u3f4lPZY=',
    onSale: false
  },
  {
    id: '205',
    name: 'Grilled Ribeye Steak',
    price: '$36',
    rating: 4,
    image: 'https://media.istockphoto.com/id/528888185/photo/sliced-medium-rare-grilled-beef-steak.jpg?s=612x612&w=0&k=20&c=J0iGdsYF6x2OofXKrEY1lc0GOLuel1SGlzKYQ--i8AY=',
    onSale: false
  },
  {
    id: '206',
    name: 'Pan-seared Salmon Fillet',
    price: '$28',
    rating: 4,
    image: 'https://media.istockphoto.com/id/471833217/photo/grilled-salmon.jpg?s=612x612&w=0&k=20&c=ic2NpudyksLDf810YcO-8XkH-KprLBqWBTYonuRWnOk=',
    onSale: false
  },
  {
    id: '207',
    name: 'Vegetarian Lasagna',
    price: '$20',
    rating: 4,
    image: 'https://media.istockphoto.com/id/2167000302/photo/lasagna.jpg?s=612x612&w=0&k=20&c=bbsc5dYyG8VaM-M90vtdvbJSbH5OG4dou8YQe6DzQys=',
    onSale: false
  },
  {
    id: '208',
    name: 'Herb Roasted Chicken Supreme',
    price: '$24',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1319935020/photo/chicken-supreme-recipe-gently-cooked-with-5-spices-sweet-potato-mousseline-peppers-cut-in-half.jpg?s=612x612&w=0&k=20&c=hj8PDyE-AErVflQFWryhRFNVKkAWOu_MY6uZbjMm7VI=',
    onSale: false
  },

  // SIDES
  {
    id: '301',
    name: 'Garlic Parmesan Fries',
    price: '$8',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1485826992/photo/seafood.jpg?s=612x612&w=0&k=20&c=xxTQKLutK-NClt6eku_HbX3dSfCm7YNr3fM0G3HmjwY=',
    onSale: false
  },
  {
    id: '302',
    name: 'Seasonal Roasted Vegetables',
    price: '$10',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1169705960/photo/lamb-skewers-with-curry-rice-and-different-vegetables.jpg?s=612x612&w=0&k=20&c=oGp_WvXmgFUdeQd0bDxwh0b0rvH30Y31kYOS4gjbtEs=',
    onSale: false
  },
  {
    id: '303',
    name: 'Truffle Mashed Potatoes',
    price: '$12',
    rating: 4,
    image: 'https://media.istockphoto.com/id/886731970/photo/mashed-potatoes-on-white-concrete-background.jpg?s=612x612&w=0&k=20&c=2gUCBxxr4SB1CiILOh_UhrCz2hPRTIdO3lrHcPLQzrY=',
    onSale: false
  },
  {
    id: '304',
    name: 'Steamed Asparagus',
    price: '$11',
    rating: 4,
    image: 'https://media.istockphoto.com/id/851979152/photo/freshly-cooked-asparagus-appetizer-with-pine-nuts-and-cranberries-on-white-plate-square-format.jpg?s=612x612&w=0&k=20&c=rPvk8-MZztJCZMQustu1Dd9QoYsT8cN57Bh5qZmsOrE=',
    onSale: false
  },
  {
    id: '305',
    name: 'Sautéed Spinach with Garlic',
    price: '$9',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1289169211/photo/organic-winter-chard-salad-almonds-healthy-meals-turkish-name-bademli-paz.jpg?s=612x612&w=0&k=20&c=u4ioKH824b0Bt4sR5B_QtEQ64cAh271raB-2437aRrg=',
    onSale: false
  },
  {
    id: '306',
    name: 'Sweet Potato Wedges',
    price: '$9',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1398179188/photo/plated-dinner-of-grilled-ham-steak-with-sweet-potato-and-chopped-broccoli-in-a-white-plate-on.jpg?s=612x612&w=0&k=20&c=IZNYHne-UmPNhGKWGAXXWyvJPr0EfMsAyNq6y4XGGBo=',
    onSale: false
  },
  {
    id: '307',
    name: 'Crispy Onion Rings',
    price: '$7',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1280227386/photo/onion-rings-with-ketchup-on-white-background.jpg?s=612x612&w=0&k=20&c=gWtYr-nQnJt9gh7cWt3b0Vq8AOOgc8-DlvHhvMiASaI=',
    onSale: false
  },
  {
    id: '308',
    name: 'Caesar Side Salad',
    price: '$8',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1179515570/photo/caesar-salad-vegetable-salad-with-roast-chicken-meat-on-wooden-background.jpg?s=612x612&w=0&k=20&c=jCilEAejAwlsKmrV6txsTTGKenjLXVE-qp93JaWyHaM=',
    onSale: false
  },

  // DESSERTS
  {
    id: '401',
    name: 'Classic Tiramisu',
    price: '$11',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1223023808/photo/italian-tiramisu-dessert-on-a-black-background.jpg?s=612x612&w=0&k=20&c=prFv4k_kHwe0tm9rVVPI8fwZnoY4We_D__QqR4ydVO8=',
    onSale: false
  },
  {
    id: '402',
    name: 'Chocolate Lava Cake',
    price: '$12',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1435338767/photo/chocolate-cake-desert-that-has-been-cut.jpg?s=612x612&w=0&k=20&c=sJ8PQxMNPjgrR5hHKyvaeTj6Tj-hyRMtWh6qTTVorOI=',
    onSale: false
  },
  {
    id: '403',
    name: 'Lemon Panna Cotta',
    price: '$10',
    rating: 4,
    image: 'https://media.istockphoto.com/id/2005190596/photo/lemon-and-yogurt-mousse-with-cookie-powder-on-top.jpg?s=612x612&w=0&k=20&c=-HC1dLORtYNdnT3ku06yhCR5hoJ7SCPAgsoNn1-Flak=',
    onSale: false
  },
  {
    id: '404',
    name: 'Mixed Berry Pavlova',
    price: '$12',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1135592220/photo/top-view-on-new-zealand-pavlova-cake-with-whipped-cream-and-mix-of-fresh-berries-on-a-blue.jpg?s=612x612&w=0&k=20&c=A7AAPlbcJGn1taJOZrhhQQrgeeOySz0d_qR3PJnLqVQ=',
    onSale: false
  },
  {
    id: '405',
    name: 'Crème Brûlée',
    price: '$13',
    rating: 4,
    image: 'https://media.istockphoto.com/id/1226354271/photo/creme-brulee.jpg?s=612x612&w=0&k=20&c=hlZBD2Di14itY3h5b3zQpQEADnXMeyxt3hxXCWgw_Xs=',
    onSale: false
  },
  {
    id: '406',
    name: 'Raspberry Cheesecake',
    price: '$11',
    rating: 4,
    image: 'https://media.istockphoto.com/id/466197927/photo/cheesecake-with-raspberries.jpg?s=612x612&w=0&k=20&c=ulTBlTpiOdhJWr-Rcb9IUEAptq4FLyFFFZF6CU3jXgA=',
    onSale: false
  },
  {
    id: '407',
    name: 'Pistachio Gelato',
    price: '$9',
    rating: 4,
    image: 'https://media.istockphoto.com/id/2163683732/photo/sweet-ice-cream-with-mint-and-chocolate.jpg?s=612x612&w=0&k=20&c=ieRG9Z9o-l_vAxysxRfwrnRD24QkKDiIdKA5TcBXp5M=',
    onSale: false
  },
  {
    id: '408',
    name: 'Warm Apple Crumble',
    price: '$12',
    rating: 4,
    image: 'https://media.istockphoto.com/id/450867011/photo/apple-walnut-streusel-cake.jpg?s=612x612&w=0&k=20&c=JXtQxQJuwLj_H7QLKP-g78gZ45anYIuVfw_nczi8lBQ=',
    onSale: false
  },

  // WINES
  {
    id: '501',
    name: 'Pinot Noir',
    price: '$38',
    rating: 4,
    image: 'https://media.istockphoto.com/id/173597966/photo/wine-composition.jpg?s=612x612&w=0&k=20&c=jZdHCu0WfOKl5SYmcMxEVXHfKrCJvI5W8Kgh99YnS5k=',
    onSale: false
  },
  {
    id: '502',
    name: 'Cabernet Sauvignon',
    price: '$42',
    rating: 4,
    image: 'https://media.istockphoto.com/id/2180157799/photo/red-wine-and-blue-grapes-on-a-black-reflective-background.jpg?s=612x612&w=0&k=20&c=cVE9IOuCIr6dN4gfbrmR62wFSFcY1FxRgDOUdv1995A=',
    onSale: false
  },
  {
    id: '503',
    name: 'Malbec',
    price: '$36',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1733248113910-400496b9a544?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fFdpbmVzfGVufDB8MnwwfHx8MA%3D%3D',
    onSale: false
  },
  {
    id: '504',
    name: 'Chardonnay',
    price: '$34',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1575336979184-90df24528dfe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2luZXN8ZW58MHwyfDB8fHww',
    onSale: false
  },
  {
    id: '505',
    name: 'Sauvignon Blanc',
    price: '$32',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1681281088269-57c68d14c559?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbmVzfGVufDB8MnwwfHx8MA%3D%3D',
    onSale: false
  },
  {
    id: '506',
    name: 'Prosecco',
    price: '$29',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1685275771294-075e4f4baf03?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdpbmVzfGVufDB8MnwwfHx8MA%3D%3D',
    onSale: false
  },
  {
    id: '507',
    name: 'Riesling',
    price: '$31',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1644302405988-e35298bfe07d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdpbmVzfGVufDB8MnwwfHx8MA%3D%3D',
    onSale: false
  },
  {
    id: '508',
    name: 'Tosaca Rosso',
    price: '$27',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1719505400700-979540262199?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdpbmVzfGVufDB8MnwwfHx8MA%3D%3D',
    onSale: false
  },
  ];

  const cartItemIds = items.map(item => item.id);

  const suggestedItems = menuItems
    .filter(item => !cartItemIds.includes(item.id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);


  return (
    <>
      {/* Parallax Header */}
      <div className='relative bg-black'>
        <Parallax
          bgImage='https://images.unsplash.com/photo-1674516584109-ae65f94f19d9?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          strength={200}
          className="h-[53vh] opacity-60 object-cover"
        />
        <Navbar />
        <div className='absolute top-[55%] left-1/2 transform -translate-x-1/2 text-white text-center'>
          <div className='text-7xl font-serif font-extralight tracking-wider my-4'>
            Cart
          </div>
        </div>
      </div>

      {/* Main Cart Section */}
      <div className="container mx-auto my-16 p-4">

        {/* Cart Table */}
        <div className="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
          <table className="w-full text-center text-gray-700">
            <thead className="bg-gray-100 text-sm uppercase text-zinc-800">
              <tr className="border-b">
                <th className="px-5 py-4"></th>
                <th className="px-5 py-4">Product</th>
                <th className="px-5 py-4">Price</th>
                <th className="px-5 py-4">Quantity</th>
                <th className="px-5 py-4">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={5}>
                    <div className="py-10 text-center text-zinc-800 tracking-wider font-light font-serif text-xl">
                      Your cart is currently empty 🛒
                    </div>

                    <div className="flex gap-10 justify-center mb-10">
                      <button
                        className="border-2 border-zinc-700 px-8 py-2 text-[0.9rem] font-[350] rounded-lg hover:bg-zinc-900 hover:text-white hover:-translate-y-1 transition-all duration-200"
                        onClick={handleViewMenu}
                      >
                        RETURN TO MENU
                      </button>

                      <button
                        className="border-2 border-zinc-700 px-8 py-2 text-[0.9rem] font-[350] rounded-lg hover:bg-zinc-900 hover:text-white hover:-translate-y-1 transition-all duration-200"
                        onClick={handleViewShop}
                      >
                        RETURN TO SHOP
                      </button>
                    </div>
                    
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-300 hover:bg-gray-100 transition duration-200">
                    <td className="px-5 py-4 text-center">
                      <button
                        className="text-2xl rounded-full text-gray-400"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        <MdCancel className="hover:text-orange-700 transition-all duration-300 ease-in-out" />
                      </button>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-start gap-10">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-28 h-26 object-cover"
                        />
                        <span className="font-medium text-sm text-center">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm">{item.price}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-around">
                        <button
                          className="w-8 h-8 border rounded hover:bg-gray-100"
                          onClick={() => handleTempQuantityChange(item.id, tempQuantities[item.id] - 1)}
                        >
                          -
                        </button>
                        <span className="px-2 font-medium">{tempQuantities[item.id]}</span>
                        <button
                          className="w-8 h-8 border rounded hover:bg-gray-100"
                          onClick={() => handleTempQuantityChange(item.id, tempQuantities[item.id] + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold">
                      ${(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Coupon/Update Section */}
          {items.length > 0 && (
            <div className="flex flex-wrap items-center justify-between px-5 py-4 bg-gray-50 gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="border border-gray-300 px-4 py-2 rounded-l placeholder:text-sm"
                />
                <button
                  className="bg-zinc-700 text-sm text-white font-medium py-3 px-5 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-orange-600 ease-in-out"
                >
                  APPLY COUPON
                </button>
              </div>
                <button
                className="bg-zinc-700 text-sm text-white font-medium py-3 px-5 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-orange-600 ease-in-out"
                onClick={handleUpdateCart}
                >
                    UPDATE
                </button>

            </div>
          )}
        </div>

        {/* Cart Summary & Suggestions */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-12">

            {/* Suggestions */}
            {suggestedItems.length > 0 && (
              <div>
                <div className="text-2xl mb-6 font-serif font-light">You may be interested in...</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {suggestedItems.map((item) => (
                    <div key={item.id} className="relative group">
                      <div className="bg-black">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-auto object-cover group-hover:opacity-80 transition"
                        />
                      </div>
                      <div className="flex justify-center items-baseline-last group-hover:-translate-y-6 transition-all duration-500 ease-in-out">
                        <button
                          className="absolute bg-white text-xs font-medium px-10 py-2 opacity-0 group-hover:opacity-100 hover:bg-orange-500 hover:text-white transition-all duration-300"
                          onClick={() => isItemInCart(item.id) ? handleViewCart() : addToCart(item)}
                        >
                          {isItemInCart(item.id) ? 'VIEW CART' : 'ADD TO CART'}
                        </button>
                      </div>
                      {item.onSale && (
                        <div className="absolute top-2 left-2 bg-orange-500 text-white m-2 p-2 rounded-full text-xs">
                          Sale
                        </div>
                      )}
                      <h3 className="text-center mt-3 text-lg font-light font-serif">{item.name}</h3>
                      <p className="text-center text-md font-serif font-light tracking-wider">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cart Totals */}
            <div>
            <div className="text-2xl font-serif font-light mb-4">Cart totals</div>
            <div className="border border-gray-200 shadow-md rounded-xl p-6 bg-white">
                <table className="w-full text-left text-sm text-gray-700">
                <tbody className="space-y-4 w-full">
                    {/* Subtotal */}
                    <tr className="border-b">
                    <td className="py-3 pr-4 text-zinc-900 font-medium">Subtotal</td>
                    <td className="py-3 text-left font-semibold text-gray-800">
                        ${subtotal.toFixed(2)}
                    </td>
                    </tr>

                    {/* Shipping */}
                    <tr className="border-b align-top">
                    <td className="py-3 pr-4 text-zinc-900 font-medium">Shipping</td>
                    <td className="py-3 text-left text-sm leading-relaxed text-gray-600">
                        <span className="block text-base font-medium text-gray-800 mb-1">
                        Flat rate: ${shipping.toFixed(2)}
                        </span>
                        <span className="text-base font-medium">Shipping to</span> <span className="text-base font-bold text-black">New South Wales</span>.
                        <div className="mt-2">
                        <button className="flex items-center gap-4 text-base">
                            Change address <FaTruckFast className="text-2xl text-black" />
                        </button>
                        </div>
                    </td>
                    </tr>

                    {/* Total */}
                    <tr className="text-lg font-bold text-zinc-800">
                    <td className="pt-4 pr-4">Total</td>
                    <td className="pt-4 text-left">${total.toFixed(2)}</td>
                    </tr>
                </tbody>
                </table>

                {/* Checkout Button */}
                <button
                className="w-full py-3 mt-6 font-semibold text-white bg-zinc-800 rounded-lg hover:bg-orange-700 hover:-translate-y-1 active:scale-95 transition-all duration-500"
                onClick={handleCheckout}
                >
                PROCEED TO CHECKOUT
                </button>
            </div>
            </div>

            

          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default CartPage;
