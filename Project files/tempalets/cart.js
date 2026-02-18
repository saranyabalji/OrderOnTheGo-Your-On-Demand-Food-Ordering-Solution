import React, { useContext } from 'react';
import { cartcontext } from '../context/cartcontext';

function Cart() {
  const { cartItems, removeFromCart } = useContext(cartcontext);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={styles.empty}>Your cart is empty.</p>
      ) : (
        <div>
          <ul style={styles.list}>
            {cartItems.map((item, index) => (
              <li key={index} style={styles.item}>
                <span>{item.name}</span>
                <span>₹{item.price}</span>
                <button onClick={() => removeFromCart(item)} style={styles.removeBtn}>Remove</button>
              </li>
            ))}
          </ul>

          <h3 style={styles.total}>Total Amount: ₹{total}</h3>

          <div style={styles.paymentContainer}>
            <h3 style={styles.paymentHeading}>Choose Payment Method:</h3>
            <button style={styles.paymentBtn}>💵 Cash on Delivery</button>
            <button style={styles.paymentBtn}>📱 UPI</button>
            <button style={styles.paymentBtn}>💳 Credit/Debit Card</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#f3f3f3',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  empty: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#666',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '10px 15px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  removeBtn: {
    backgroundColor: '#e53935',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  total: {
    textAlign: 'right',
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  paymentContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  paymentHeading: {
    marginBottom: '10px',
  },
  paymentBtn: {
    margin: '8px',
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Cart;
