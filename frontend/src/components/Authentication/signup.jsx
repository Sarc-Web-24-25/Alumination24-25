import React, { useEffect, useState } from 'react';
import bg from "./bglogin.png"
import useSignup from '../../hooks/useSignup';
import { Navigate } from 'react-router-dom';
import './signup.css';
// import CursorAnimation from "../Home/CursorAnimation"

const containerStyle = {
  width: '50%',
  height: '65vh',
  padding: '30px',
  margin: '20px',
  backgroundColor: '#45382C',
  opacity: '80%',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
};

const inputStyle = {
  width: '300px',
  padding: '10px',
  margin: '5px 0',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
  backgroundColor: '#fff',

};
const inputStyle1 = {
  width: '150px',
  padding: '10px',
  margin: '5px 0',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
  backgroundColor: '#fff',

};


const buttonStyle = {
  margin: '10px',
  width: '150px',
  padding: '12px',
  backgroundColor: '#3D52D5',
  border: 'none',
  borderRadius: '5px',
  color: '#FFF',
  fontSize: '16px',
  cursor: 'pointer',
  opacity: 1, // Set initial opacity to 1 (fully opaque)
};

const disabledButtonStyle = {
  ...buttonStyle,
  opacity: 0.5, // Lower opacity when button is disabled
  cursor: 'not-allowed', // Change cursor to indicate button is disabled
};



function Signup() {
  const [password, setPassword] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [is_alum, setIsAlum] = useState(false);
  const [emailtype, setEmailType] = useState('@iitb.ac.in');



  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    setPasswordMatch(password === confirmPasswordValue);
  };


  const allFieldsFilled = () => {
    return (
      password !== "" &&
      rollNumber !== "" &&
      confirmPassword !== "" &&
      passwordMatch
    );
  };




  const formStyle = {
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

  const headingStyle = {
    fontSize: '26px',
    marginBottom: '20px',
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: "10px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "10px",
  };

  const { formData, setFormData, error, success, handleInputChange, signup } = useSignup();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value + emailtype });
  }

  const handleAlumChange = (value) => {
    setIsAlum(value);
    setFormData({ ...formData, is_alum: value });
    if(value){
      if(emailtype === "@iitb.ac.in"){
        setEmailType("@iitbombay.org");
      }
    }else{
      if(emailtype === "@iitbombay.org"){
        setIsAlum(true);
      }
    }
  }

  const handleEmailTypeChange = (event) => {
    setEmailType(event.target.value);
    if(event.target.value === "@iitbombay.org"){
      setIsAlum(true);
    }
    if(event.target.value === "@iitb.ac.in"){
      setIsAlum(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      username: rollNumber + emailtype
    }));
    console.log(formData); 
    signup();
  };

  if (localStorage.getItem('userData')) {
    return <Navigate to="/" />;
  }



  return (

    <div style={formStyle}>
      {/* <CursorAnimation/> */}
        <div className='main-container-login' style={containerStyle}>

      <h1 style={headingStyle}>REGISTER</h1>
      {error && <p className="error">{error}</p>}
      {success && <p style={{color: "green"}} className="error">{`Signup successful, Please check your ${emailtype === "@gmail.com" ? "Gmail": "Webmail"} for verification link!`}</p>}

      <div style={{ display: "flex", width: "300px" }}>
          <input
            type="text"
            name='username'
            style={inputStyle1}
            placeholder="Email"
            value={rollNumber}
            onChange={handleRollNumberChange}
          />
          <select
            name="emailtype"
            id="emailtype"
            style={inputStyle1}
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

      <input
        type="password"
        name='password'
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        style={inputStyle}
      />

      <div style={{backgroundColor: "rgba(255,255,255,0.3)", padding: "5px", borderRadius: "10px"}}>
        Are you an IITB Alum? &nbsp;
        <input onChange={() => handleAlumChange(true)} type="radio" name='is_alum' checked={is_alum} style={{color: "white"}} required /> Yes
        <input onChange={() => handleAlumChange(false)} type="radio" name='is_alum' checked={!is_alum} style={{color: "white"}} required /> No
      </div>


      <button onClick={handleSubmit} style={allFieldsFilled() ? buttonStyle : disabledButtonStyle} disabled={!allFieldsFilled()}>REGISTER</button>
        </div>

    </div>
  );
}



export default Signup;
