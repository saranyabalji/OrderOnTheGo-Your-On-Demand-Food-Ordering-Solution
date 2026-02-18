import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';


const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logoBox}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/cart" style={styles.link}>Cart</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/register" style={styles.link}>Register</Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#ff5722',
    padding: '10px 20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '45px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '5px',
    backgroundColor: '#ff7043',
  }
};

export default Header;
