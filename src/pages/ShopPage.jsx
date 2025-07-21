import React, { useState } from 'react'
import { Parallax } from 'react-parallax';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from "../context/CartContext";
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShopPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('rating');
    const itemsPerPage = 8;
    const { items: cartItems, addToCart } = useCart();
    const navigate = useNavigate();

    const menuItems = [
        { id: 1, name: 'Margherita Pizza', price: '$29.00', rating: 4, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-6-550x550.jpg', onSale: false },
        { id: 2, name: 'Spicy Seafood Pasta', price: '$29.00', rating: 5, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-7-550x550.jpg', onSale: false },
        { id: 3, name: 'Pasta Bolognese', price: '$26.00', rating: 3, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/04/product-13-550x550.jpg', onSale: true },
        { id: 4, name: 'Fettuccine Bolognese', price: '$22.00', rating: 4, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/04/product-14-550x550.jpg', onSale: false },
        { id: 5, name: 'Mushroom Bolognese Pasta', price: '$19.99', rating: 4, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-9-550x550.jpg', onSale: true },
        { id: 6, name: 'Spaghetti Napoletana', price: '$24.99', rating: 5, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-8-550x550.jpg', onSale: false },
        { id: 7, name: 'Vegetable Salad', price: '$16.00', rating: 3, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-5-550x550.jpg', onSale: false },
        { id: 8, name: 'Fresh Oyster Dozen', price: '$59.00', rating: 5, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-oyster-550x550.jpg', onSale: true },
        { id: 9, name: 'Grilled Salmon', price: '$34.00', rating: 4, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-punch-550x550.jpg', onSale: false },
        { id: 10, name: 'Chocolate Lava Cake', price: '$12.00', rating: 5, image: 'https://patiotime.loftocean.com/wp-content/uploads/2022/03/product-1-toast-550x550.jpg', onSale: false },
    ];

    const sortedItems = [...menuItems].sort((a, b) => {
        if (sortOption === 'rating') {
            return b.rating - a.rating;
        } else if (sortOption === 'price') {
            // Remove $ sign and convert to number for comparison
            const priceA = parseFloat(a.price.replace('$', ''));
            const priceB = parseFloat(b.price.replace('$', ''));
            return priceA - priceB;
        }
        return 0;
    });

    const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
    const currentItems = sortedItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
        setCurrentPage(1); // Reset to first page when sorting changes
    };

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

    return (
        <>
            {/* Parallax IMG */}
            <div className='relative bg-black'>
                <Parallax
                    bgImage='https://images.unsplash.com/photo-1674516584109-ae65f94f19d9?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    bgImageAlt="Reservation Table"
                    strength={200}
                    className="h-[53vh] opacity-60 object-cover">
                </Parallax>
                <Navbar />
                <div className='absolute top-[55%] left-1/2 transform -translate-x-1/2 text-white text-center'>
                    <div className='text-7xl font-serif font-extralight tracking-wider my-4'>
                        Shop
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <div className="container mx-auto my-16 p-4">
                <div className="flex justify-between items-center mb-8">
                    <div className='text-ms font-light'>Showing {currentPage * itemsPerPage - itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, sortedItems.length)} of {sortedItems.length} results</div>
                    <div>
                        <select
                            value={sortOption}
                            onChange={(e) => handleSortChange(e.target.value)}
                            className="bg-white border-b text-md font-light border-gray-300 px-2 py-1 focus:outline-none"
                        >
                            <option value="rating">Sort by average rating</option>
                            <option value="price">Sort by price</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {currentItems.map((item) => (
                        <div key={item.id} className="relative group">
                            <div className='bg-black'>
                                <img src={item.image} alt={item.name} className="w-full h-auto object-cover relative bg-black group-hover:opacity-80" />
                            </div>

                            <div className='flex justify-center items-baseline-last group-hover:-translate-y-6 transition-all duration-500 ease-in-out'>
                                <button 
                                    className='absolute bg-white text-xs font-medium px-10 py-2 opacity-0 group-hover:opacity-100 hover:bg-orange-500 hover:text-white transition-all duration-300'
                                    onClick={() => isItemInCart(item.id) ? handleViewCart() : handleAddToCart(item)}
                                >
                                    {isItemInCart(item.id) ? 'VIEW CART' : 'ADD TO CART'}
                                </button>
                            </div>

                            {item.onSale && (
                                <div className="absolute top-2 left-2 bg-orange-500 text-white m-2 p-2 rounded-full text-xs">Sale</div>
                            )}
                            <h3 className="text-center mt-3 text-lg font-light font-serif">{item.name}</h3>
                            <p className="text-center text-md font-serif font-light tracking-wider">{item.price}</p>
                            <div className="flex justify-center gap-0.5 text-xs">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`${i < item.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                                        {i < item.rating ? '\u2605' : '\u2606'}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`mx-1 px-3 py-1 rounded-full ${currentPage === page ? 'bg-orange-700 text-white' : 'hover:bg-gray-200'}`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default ShopPage