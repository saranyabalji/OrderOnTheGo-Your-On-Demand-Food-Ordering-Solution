import React, { useEffect, useState } from 'react';
import './userprofile.css';

const UserProfile = () => {
  const [user, setUser] = useState({ name: '', email: '', orders: [] });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      // You can also fetch orders using API with storedUser.email
      setUser({
        ...storedUser,
        orders: [
          {
            id: 1,
            item: 'Vanilla Lassi',
            restaurant: 'Andhra Spice',
            quantity: 1,
            price: 119,
            originalPrice: 149,
            date: '2023-09-01',
            time: '14:18',
            payment: 'cod',
            status: 'delivered',
            image: '/images/lassi.jpg'
          }
        ]
      });
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="user-sidebar">
        <h3>Username: {user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Orders: {user.orders.length}</p>
        <button className="logout-btn" onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}>Logout</button>
      </div>

      <div className="orders-section">
        <h2>Orders</h2>
        {user.orders.map(order => (
          <div className="order-card" key={order.id}>
            <img src={order.image} alt={order.item} className="order-img" />
            <div className="order-info">
              <h3>{order.item}</h3>
              <p>{order.restaurant}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Total Price: ₹{order.price} <s>₹{order.originalPrice}</s></p>
              <p>Ordered on: {order.date} Time: {order.time}</p>
              <p>Payment mode: {order.payment}</p>
              <p>Status: {order.status}</p>
              {order.status !== 'delivered' && <button className="cancel-btn">Cancel</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
