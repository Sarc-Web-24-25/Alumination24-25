import React, { useState } from 'react';
import bg from "./loginbg.png"
import useLogin from '../../hooks/useLogin';
import { Navigate } from 'react-router-dom';
// import loginSound from '../Home/bgimg/background-audio.mp3';
import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './Auth.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailtype, setEmailType] = useState('@iitb.ac.in');
  const [isHovered, setIsHovered] = useState(false);
  // const audio = new Audio(loginSound);

  const { formData, setFormData, error, success, handleInputChange, login } = useLogin();
  // const playLoginSound = () => {
  //   audio.play();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, username: email + emailtype });
    login();

    // // Play the login sound
    // playLoginSound();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value + emailtype });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleEmailTypeChange = (event) => {
    setEmailType(event.target.value);
    setFormData({ ...formData, username: email + event.target.value });
  }






  const frameStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    fontFamily: 'Inter, sans-serif',
    backgroundImage: `url(${bg})`,
    minHeight: '95vh',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  const containerStyle = {
    width: '60%',
    height: '100vh',
    padding: '10px',
    marginleft: '0px',
    backgroundColor:'rgba(255, 255, 255, 0.8)',
    // backgroundColor: '#ffffff',
    // opacity: '80%',
    // borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    // justifyContent: 'center',
    transition: 'transform 2s ease-in-out',
  };


  const inputStyle = {
    width: '50%',
  
    border: '1px solid transparent',
   borderRadius:'100px',
    fontSize: '3vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'transparent',
    
    color:'black',
    marginLeft:'15px',
  };
  const inputStyle1 = {
    width: '100%',
    // display: 'flex',
    // height: '40px',
    // marginBottom: '3vh',
    border: '1px solid transparent',
    borderRadius: '100px',
    fontSize: '3vh',
    alignItems: 'center',
    // justifyContent: 'center',
     backgroundColor:'transparent',
    // opacity:'80%',
    color:'black',
    marginLeft:'15px',
    padding:'2px'
  };
  const inputfield = {
    width: '60%',
    display: 'flex',
    height: '6vh',
    marginBottom: '3vh',
    border: '1px solid #ccc',
    borderRadius: '100px',
    fontSize: '3vh',
    alignItems: 'center',
    // justifyContent: 'center',
     backgroundColor:'rgba(0, 0, 0, 0.4)',
    // opacity:'80%',
    color:'black',
    padding:'10px'
    
  };

  const buttonStyle = {
    margin: '30px',
    width: '150px',
    padding: '12px',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    color:'Black',
    backgroundColor:"rgba(0, 0, 0, 0.4)", // Lower opacity when button is disabled
    cursor: 'not-allowed', // Change cursor to indicate button is disabled
  };

  const anchorStyle = {
    color: isHovered ? 'red' : 'blue',
    textDecoration: 'none',
    fontSize: '17px',
    margin: '20px',
    transition: 'color 0.3s',
  };
const headingstyle={fontWeight: "bold", color: "black", marginBottom:"50px",marginTop:'100px'};
  if (localStorage.getItem('userData')) {
    return <Navigate to="/" />;
  }

  return (
    <div style={frameStyle}>
      <div className="containerstyle slide-in-right" style={containerStyle} >
        <h1 className='headingstyle' style={headingstyle}>LOGIN</h1>
        {error && <p className="error">{error}</p>}
        {success && <p style={{ color: "white" }} className="error">{success}</p>}
        <div className='inputfield' style={inputfield}>
        <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            name='username'
            className='inputstyle'
            style={inputStyle}
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <select
            name="emailtype"
            id="emailtype"
            style={inputStyle}
            onChange={handleEmailTypeChange}
            value={emailtype}
          >
            <option value="@iitb.ac.in" default>
              @iitb.ac.in
            </option>
            <option value="@iitbombay.org">@iitbombay.org</option>
            <option value="@gmail.com">@gmail.com</option>
          </select>
        </div>
        <div className='inputfield' style={inputfield}>
        <FontAwesomeIcon icon={faLock} />
        <input
          name='password'
          type="password"
          className='inputstyle1'
          style={inputStyle1}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        </div>
        <a className='links' href='/forgotPassword' style={anchorStyle}>Forgot password?</a>
        <button className='login-button' style={password !== "" && email !== "" ? buttonStyle: disabledButtonStyle} onClick={handleSubmit} disabled={!(password !== "" && email !== "")}>
          LOGIN
        </button>
        <a className='links' href='/signup' style={anchorStyle}>New user ? Register here!</a>
      </div>
    </div>
  );
}

export default Login;
