import React from 'react'
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import OurStoryPage from './pages/OurStoryPage';
import ChefsPage from './pages/ChefsPage';
import ContactPage from './pages/ContactPage';
import ReservationDesk from './pages/ReservationDesk';
import BlogPage from './pages/BlogPage';
import BlogStandardPage from './pages/BlogStandardPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
import AccountPage from './pages/AccountPage';

// Components
import Navbar from './components/Navbar';

// ✅ Import CartProvider
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <HashRouter>
      // ✅ Wrap everything inside the CartProvider
      <CartProvider>
        <Navbar />
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/meet-our-chefs" element={<ChefsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/reservation-desk" element={<ReservationDesk />} />
          <Route path="/blog-news" element={<BlogPage />} />
          <Route path="/blog-standard" element={<BlogStandardPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/accounts-login" element={<AccountPage />} />

        </Routes>

        <ToastContainer
          autoClose={2000}
          limit={3}
          closeOnClick={true}
          toastClassName="my-custom-toast"
          bodyClassName="my-toast-body"
          progressClassName="my-progress-bar"
          // Or use inline style prop:
          style={{ width: "350px", fontFamily: "serif" }}
          position="top-center"
        />
      </CartProvider>
    </HashRouter>
  );
}

export default App;
