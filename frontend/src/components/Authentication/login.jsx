import React, { useState } from 'react';
import bg from "./bglogin.png"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const data = {
      username: email,
      password: password,
    };

    fetch('/login/', { // Updated URL path to match your Django URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // Login successful
          setIsLoggedIn(true); // Set user authentication state to true
          setError(''); // Clear any previous error messages
        } else {
          // Login failed
          setError('Login failed. Please check your credentials.'); // Display an error message
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred. Please try again.'); // Display an error message
      });
  };

  const frameStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Inter, sans-serif',
    backgroundImage: `url(${bg})`,
    minHeight: '94.1vh',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  const containerStyle = {
    width: '50%',
    height: '70vh', // Adjust the height as needed
    padding: '30px', // Adjust the padding as needed
    margin: '20px',
    backgroundColor: '#45382C',
    opacity: '80%',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align vertically
  };

  const inputStyle = {
    width: '50%', // Adjust the width to your preference
    display: 'flex',
    flexDirection: 'column',
    height: '50px',
    marginBottom: '3%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const buttonStyle = {
    margin: '15px',
    width: '150px',
    padding: '12px',
    backgroundColor: '#3D52D5',
    border: 'none',
    borderRadius: '5px',
    color: '#FFF',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const anchorStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '20px',
    margin: '5px',
  };

  return (
    <div style={frameStyle}>
      <div style={containerStyle}>
        <h1>LOGIN</h1>
        <input
          type="text"
          style={inputStyle}
          placeholder="Username"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          style={inputStyle}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button style={buttonStyle} onClick={handleLogin}>
          LOGIN
        </button>
        <a href='#' style={anchorStyle}>Forgot password?</a>
        {isLoggedIn && <p>Logged in successfully!</p>}
      </div>
    </div>
  );
}

export default Login;
