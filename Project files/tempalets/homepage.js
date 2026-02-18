// client/src/pages/homepage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>🍴 Welcome to OrderOnTheGo!</h1>
      <div className="home-buttons">
        <button onClick={() => navigate('/menu')}>View Menu</button>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
        <button onClick={() => navigate('/admin')}>Admin Dashboard</button>
        <button onClick={() => navigate('/profile')}>User Profile</button>
      </div>
    </div>
  );
};

export default HomePage;
