// client/src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/productlist';
import Cart from './pages/cart';
import Login from './pages/login';
import Register from './pages/register';
import AdminDashboard from './pages/admindashboard';
import Header from './assets/components/header';

import { CartContextProvider } from './context/cartcontext';
import UserProfile from './pages/userprofile';
import HomePage from './pages/homepage';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Routes>
        <Route path="/menu" element={<ProductList />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
    </CartContextProvider>
  );
}

export default App;
