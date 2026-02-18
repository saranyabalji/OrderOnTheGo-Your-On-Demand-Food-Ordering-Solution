import React, { useEffect, useState } from 'react';
import './admindashboard.css'; // You’ll create this CSS next

function AdminDashboard() {
  const [users, setUsers] = useState(0);
  const [restaurants, setRestaurants] = useState(0);
  const [orders, setOrders] = useState(0);

  // Dummy fetch simulation (replace with real API calls)
  useEffect(() => {
    // Simulate fetching counts
    setUsers(15);        // Replace with data from backend
    setRestaurants(5);   // Replace with data from backend
    setOrders(43);       // Replace with data from backend
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>📊 Admin Dashboard</h2>
      <div className="cards">
        <div className="card">
          <h3>👤 Total Users</h3>
          <p>{users}</p>
        </div>
        <div className="card">
          <h3>🍽 Restaurants</h3>
          <p>{restaurants}</p>
        </div>
        <div className="card">
          <h3>🧾 Orders</h3>
          <p>{orders}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
