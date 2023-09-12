import React, { useState } from 'react';
import bg from "./bg.jpg"


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Simulate login logic (replace with actual login code)
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
     
    } else {
      setIsLoggedIn(false);
    }
  };

  const frameStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Inter, sans-serif',
    backgroundImage: `url(${bg})`,
     minHeight: '94.1vh',
   
    justifyContent: 'center',
    backgroundSize: 'cover', // Scale the image to cover the entire container
    backgroundPosition: 'center', // Center the background image
    backgroundAttachment: 'fixed', // Fix the background image in place
  };

  

  
const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px'
  
};

const text = {
  maxWidth: '100%',
  maxHeight: '150px',
  
  

};

 
 
const inputStyle = {
  width: '300px',
  padding: '10px',
  margin: '5px 0',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
 
  
};

  const buttonStyle = {
    margin:'15px',
    width: '150px',
    padding: '12px',
    backgroundColor: '#3D52D5',
    border: 'none',
    borderRadius: '5px',
    color: '#FFF',
    fontSize: '16px',
    cursor: 'pointer',
  }
  
  const anchorStyle = {
    color: '#fff', // Adjust the color as needed
    textDecoration: 'none', // Remove underlines
    fontSize: '20px', // Adjust the font size
    margin: '5px', // Adjust the spacing
  };
  

  return (
    <div style={frameStyle}>
      

      <div style={imageContainerStyle}>
        <h1 style={text}>LOGIN</h1>
      </div>
        
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
  );
}

export default Login;
