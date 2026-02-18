import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });

  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('User registered:', formData); // Optional: send to backend
    setRegistered(true);
  };

  return (
    <div style={styles.container}>
      {!registered ? (
        <form onSubmit={handleRegister} style={styles.form}>
          <h2 style={styles.heading}>📝 Register</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            value={formData.address}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>
      ) : (
        <div style={styles.successBox}>
          <h2>✅ Registered Successfully!</h2>
          <p>Welcome, {formData.username} 🎉</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '450px',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  successBox: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
  }
};

export default Register;
