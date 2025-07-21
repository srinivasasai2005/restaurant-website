import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function AccountPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <>
      {/* Parallax IMG */}
      <div className='relative bg-black'>
        <Parallax
          bgImage='https://images.unsplash.com/photo-1674516584109-ae65f94f19d9?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          bgImageAlt='Reservation Table'
          strength={200}
          className="h-[53vh] opacity-60 object-cover"
        />
        <Navbar />
        <div className='absolute top-[55%] left-1/2 transform -translate-x-1/2 text-white text-center'>
          <div className='text-7xl font-serif font-extralight tracking-wider my-4'>
            My Account
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="min-h-[60vh] flex flex-col justify-center bg-white px-4 pb-10">
        <form
          className="max-w-5xl mx-auto w-full mt-16 bg-white"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {/* Title */}
          <div className="mb-12 text-3xl font-serif font-light tracking-wide">
            Login
          </div>
          {/* Username/Email */}
          <div className="mb-6 max-w-3xl">
            <label
              htmlFor="username"
              className="block text-base font-normal text-zinc-600 mb-1"
            >
              Username or email address <span className="text-orange-600">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="block w-full border border-gray-400 rounded px-3 py-3 text-base outline-none"
              value={form.username}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Password */}
          <div className="mb-6 max-w-3xl">
            <label
              htmlFor="password"
              className="block text-base font-normal text-zinc-600 mb-1"
            >
              Password <span className="text-orange-600">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="block w-full border border-gray-400 rounded px-3 py-3 text-base outline-none pr-11"
                value={form.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500 hover:text-orange-600"
                onClick={() => setShowPassword(show => !show)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>
          {/* Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-4">
            <button
              type="submit"
              className="bg-orange-700/90 hover:-translate-y-1 rounded px-8 py-2 text-white font-semibold text-sm tracking-wide transition w-fit duration-300 ease-in-out"
            >
              LOG IN
            </button>
            <label className="inline-flex items-center text-base ml-2 cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                className="mr-2 accent-orange-600"
                checked={form.remember}
                onChange={handleInputChange}
              />
              <span className="font-light text-zinc-800">Remember me</span>
            </label>
          </div>
          {/* Forgot password */}
          <div className="mt-4">
            <a
              href="#"
              className="text-orange-600 text-base font-light tracking-wide"
            >
              Lost your password?
            </a>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default AccountPage;
