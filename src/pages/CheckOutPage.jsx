import React, { useState } from "react";
import { Parallax } from 'react-parallax';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';  // Make sure this path is correct

function CheckoutPage() {
  const { items, subtotal, shipping, total } = useCart();

  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "India",
    address: "",
    apartment: "",
    suburb: "",
    state: "Hyderabad",
    postcode: "",
    phone: "",
    email: "",
    shipDifferent: false,
    orderNotes: "",
  });

  const [payment, setPayment] = useState("bank");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBilling((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePaymentChange = (e) => setPayment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Place order logic here (e.g., send to API)
    alert("Order placed successfully!");
  };

  return (
    <>
      {/* Parallax Header */}
      <div className="relative bg-black">
        <Parallax
          bgImage="https://images.unsplash.com/photo-1674516584109-ae65f94f19d9?q=80&w=3072&auto=format&fit=crop"
          strength={200}
          className="h-[53vh] opacity-60 object-cover"
        />
        <Navbar />
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 text-white text-center">
          <div className="text-7xl font-serif font-extralight tracking-wider my-4">
            Checkout
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <form
        className="container mx-auto my-16 flex flex-wrap gap-16 justify-center"
        onSubmit={handleSubmit}
      >
        
        {/* Billing Form */}
        <div className="w-full max-w-xl p-8">
          <div className="text-3xl font-serif font-light mb-6 tracking-wide">Billing Details</div>

          <div className="grid gap-5">

            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-lg font-normal text-zinc-600 mb-1">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={billing.firstName}
                  onChange={handleInputChange}
                  className="border border-gray-600 p-3 rounded w-full focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-normal text-zinc-600 mb-1">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={billing.lastName}
                  onChange={handleInputChange}
                  className="border border-gray-600 p-3 rounded w-full focus:outline-none"
                  required
                />
              </div>
            </div>


            {/* Company */}
            <div>
              <label className="block text-lg font-normal text-zinc-600 mb-1">Company Name (optional)</label>
              <input
                type="text"
                name="company"
                value={billing.company}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded w-full focus:outline-none"
              />
            </div>


            {/* Country */}
            <div>
              <label className="block text-lg font-normal text-zinc-600 mb-1">Country / Region *</label>
              <select
                name="country"
                value={billing.country}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded w-full focus:outline-none"
                required
              >
                <option value="India">India</option>
                {/* Add more countries if needed */}
              </select>
            </div>


            {/* Street Address */}
            <div>
              <label className="block text-lg font-normal text-zinc-600 mb-1">Street Address *</label>
              <input
                type="text"
                name="address"
                value={billing.address}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded w-full focus:outline-none"
                required
              />
            </div>


            {/* Apartment */}
            <div>
              <label className="block text-lg font-normal text-zinc-600 mb-1">Apartment / Unit / Suite (optional)</label>
              <input
                type="text"
                name="apartment"
                value={billing.apartment}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded w-full focus:outline-none"
              />
            </div>


            {/* Suburb */}
            <div>
              <label className="block text-lg font-normal text-zinc-600 mb-1">Suburb *</label>
              <input
                type="text"
                name="suburb"
                value={billing.suburb}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded w-full focus:outline-none"
                required
              />
            </div>


            {/* State / Region */}
            <div>
              <label className="block text-lg font-normal text-zinc-600 mb-1">State / Region *</label>
              <select
                name="state"
                value={billing.state}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded w-full focus:outline-none"
                required
              >
                <option>Hyderabad</option>
                {/* Add other states if needed */}
              </select>
            </div>


            {/* Postcode */}
            <div>
              <label className="block text-lg font-normal text-zinc-600 mb-1">Postcode *</label>
              <input
                type="text"
                name="postcode"
                value={billing.postcode}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded w-full focus:outline-none"
                required
              />
            </div>


            {/* Phone */}
            <div>
              <label className="block text-lg font-normal text-zinc-600 mb-1">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={billing.phone}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded w-full focus:outline-none"
                required
              />
            </div>


            {/* Email */}
            <div>
              <label className="block text-lg font-normal text-zinc-600 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={billing.email}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded w-full focus:outline-none"
                required
              />
            </div>


            {/* Ship to different address */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="shipDifferent"
                  checked={billing.shipDifferent}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="text-md text-gray-600">Ship to a different address?</span>
              </label>
            </div>


            {/* Order Notes */}
            <div>
              <label className="block text-lg font-normal text-zinc-600 mb-1">Order Notes (optional)</label>
              <textarea
                name="orderNotes"
                value={billing.orderNotes}
                onChange={handleInputChange}
                rows={4}
                className="border border-gray-600 p-3 rounded w-full focus:outline-none"
              />
            </div>
          </div>
        </div>


        {/* Order Preview & Payment */}
        <div className="w-full max-w-md space-y-8">

          {/* Order Summary */}
          <div className="bg-gray-100 p-6 ">
            <div className="text-2xl font-serif mb-4">Your order</div>
            <table className="w-full text-lg font-light mb-4">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left font-medium">Product</th>
                  <th className="py-2 text-right font-medium">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="py-3 text-center text-gray-500">Cart is empty</td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2">{item.name} × {item.quantity}</td>
                      <td className="py-2 text-right">
                        ${ (parseFloat(item.price?.replace(/[^0-9.]/g, "")) * item.quantity).toFixed(2) }
                      </td>
                    </tr>
                  ))
                )}
                <tr className="border-t">
                  <td className="py-2 font-medium">Subtotal</td>
                  <td className="py-2 text-right">${subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Shipping</td>
                  <td className="py-2 text-right">Flat rate: ${shipping.toFixed(2)}</td>
                </tr>
                <tr className="border-t text-lg font-medium">
                  <td className="py-2">Total</td>
                  <td className="py-2 text-right">${total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Methods */}
          <div className="bg-gray-100 p-6">
            <div className="mb-3 space-y-4 text-md font-normal">
              {/* Bank Transfer */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={payment === "bank"}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                Direct bank transfer
              </label>
              {payment === "bank" && (
                <p className="ml-6 text-sm text-gray-500 fade-in-up">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
              )}

              {/* Check Payments */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="check"
                  checked={payment === "check"}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                Check payments
              </label>
              {payment === "check" && (
                <p className="ml-6 text-sm text-gray-500 fade-in-up">
                  Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                </p>
              )}

              {/* Cash on Delivery */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={payment === "cod"}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                Cash on delivery
              </label>
              {payment === "cod" && (
                <p className="ml-6 text-sm text-gray-500 fade-in-up">
                  Pay with cash upon delivery.
                </p>
              )}
            </div>


            <p className="text-sm text-gray-600 mt-4 mb-6">
              Your personal data will be used to process your order, support your experience, and for other purposes described in our privacy policy.
            </p>

            <button
              type="submit"
              className="w-full py-3 font-semibold text-white bg-zinc-800 rounded-lg hover:bg-orange-700 hover:-translate-y-1 transition-all duration-300"
              disabled={items.length === 0}
            >
              PLACE ORDER
            </button>
          </div>
        </div>

      </form>

      <Footer />
    </>
  );
}

export default CheckoutPage;
