import { createContext, useState } from 'react';

export const cartcontext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <cartcontext.Provider value={{ cartItems, addToCart }}>
      {children}
    </cartcontext.Provider>
  );
};


