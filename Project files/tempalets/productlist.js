// productlist.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { cartcontext } from '../context/cartcontext';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState('All');
  const { addToCart } = useContext(cartcontext);

  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages', 'Snacks', 'South Indian', 'Chinese'];
  const imageMap = {
    'Paneer Tikka': '/images/Paneer_Tikka_.png',
    'Chicken 65': '/images/chicken-65.png',
    'Veg Manchurian': '/images/veg manchurian.jpg',
    'Chilli Gobi': '/images/chilli gobi.jpg',
    'Butter Chicken': '/images/butter chicken.jpg',
    'Paneer Butter Masala': '/images/panner butter masala.jpg',
    'Veg Biryani': '/images/veg biriyani.jpg',
    'Chicken Biryani': '/images/chicken biriyani.jpg',
    'Gulab Jamun': '/images/gulab jamun.jpg',
    'Rasgulla': '/images/rasagolla.jpg',
    'Ice Cream Sundae': '/images/ice cream.jpg',
    'Chocolate Brownie': '/images/choclate brownie.jpg',
    'Cold Coffee': '/images/cold coffe.jpg',
    'Lassi': '/images/lassi.jpg',
    'Fresh Lime Soda': '/images/fresh lime soda.jpg',
    'Masala Chai': '/images//masala chai.jpg',
    'Veg Burger': '/images/veg burger.jpg',
    'Chicken Sandwich': '/images/chicken sandwich.jpg',
    'French Fries': '/images/french fries.jpg',
    'Samosa': '/images/samosa.jpg',
    'Masala Dosa': '/images/masala dosa.jpg',
    'Idli Vada': '/images/idli vada.jpg',
    'Uttapam': '/images/uttapam.jpg',
    'Pongal': '/images/pongal.jpg',
    'Hakka Noodles': '/images/hakka nodles.jpg',
    'Chicken Fried Rice': '/images/chicken fried rice.jpg',
    'Veg Spring Rolls': '/images/veg spring rools.jpg',
    'Chilli Paneer': '/images/chilli panner.jpg'
  };

   useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Failed to fetch products", err));
  }, []);

  const filteredProducts = filteredCategory === 'All'
    ? products
    : products.filter(p => p.category === filteredCategory);

  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
    <img
    src="/images/logo.png" // Place your logo image inside: public/images/logo.png
    alt="OrderOnTheGo Logo"
    style={{ height: '60px', marginRight: '10px' }}
  />
  <h1 style={{ fontSize: '24px', color: '#ff5722' }}>OrderOnTheGo</h1>
</div>

      <h2 style={styles.title}>🍽 Our Menu</h2>

      <div style={styles.filterContainer}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilteredCategory(cat)}
            style={{
              ...styles.filterButton,
              backgroundColor: filteredCategory === cat ? '#ff5722' : '#fff',
              color: filteredCategory === cat ? '#fff' : '#333'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.grid}>
        {filteredProducts.map((p) => (
          <div key={p.id} style={styles.card}>
            <img
              src={imageMap[p.name] || 'https://via.placeholder.com/300x200'}
              alt={p.name}
              style={styles.image}
            />
            <h3 style={styles.name}>{p.name}</h3>
            <p style={styles.category}>{p.category}</p>
            <p style={styles.price}>₹{p.price}</p>
            <button style={styles.button} onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 🟩 FIXED: Correctly placed styles object below the component
const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2rem',
    color: '#333',
  },
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  filterButton: {
    padding: '8px 14px',
    borderRadius: '6px',
    border: '1px solid #ff5722',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '15px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0 5px',
  },
  category: {
    fontSize: '14px',
    color: '#888',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '8px 0',
  },
  button: {
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
  }
};

export default ProductList;
