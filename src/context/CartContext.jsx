import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Helper to add (or increment) items
  const addToCart = (product) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Add new item with quantity = 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, qty) } : i
      )
    );
  };

  const clearCart = () => setItems([]);

  // Cart totals
  const subtotal = items.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.quantity,
    0
  );

  // Shipping is example $9
  const shipping = items.length ? 9 : 0;
  const total = subtotal + shipping;

  // Context value
  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    shipping,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
