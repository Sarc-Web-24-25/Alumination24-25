import React, { useEffect, useState } from 'react';
import bg from "./loginbg.png"
import useSignup from '../../hooks/useSignup';
import { Navigate } from 'react-router-dom';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import './Auth.css'

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'right',
  fontFamily: 'Inter, sans-serif',
  backgroundImage: `url(${bg})`,
  minHeight: '95.1vh',
  justifyContent: 'right',
  backgroundSize: 'cover', // Scale the image to cover the entire container
  backgroundPosition: 'center', // Center the background image
  backgroundAttachment: 'fixed', // Fix the background image in place
  // paddingTop: '10vh'
};
const containerStyle = {
  width: '60%',
  height:'100vh',
  padding: '10px',
  marginLeft: 'auto',
  marginRight:'0px',
  backgroundColor:'rgba(255, 255, 255, 0.8)',
//   backgroundColor: '#45382C',
  //  backgroundColor: '#ffffff',
  //  opacity: '80%',
  // opacity: '80%',
//   borderRadius: '20px',
  // display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  transition: 'transform 2s ease-in-out',
  paddingTop: '10vh' 
};

// const inputStyle = {
//   width: '300px',
//   padding: '10px',
//   margin: '5px 0',
//   border: '1px solid #ccc',
//   borderRadius: '5px',
//   fontSize: '16px',
//   backgroundColor: '#fff',

// };
// const inputStyle1 = {
//   width: '150px',
//   padding: '10px',
//   margin: '5px 0',
//   border: '1px solid #ccc',
//   borderRadius: '5px',
//   fontSize: '16px',
//   backgroundColor: '#fff',

// };

const inputStyle = {
  width: '50%',
  // display: 'flex',
  // height: '40px',
  // marginBottom: '3vh',
  border: 'none',
  // borderRadius: '100px',
  fontSize: '3vh',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'transparent',
  // opacity:'80%',
  color:'black',
  marginLeft:'15px',
};
const inputStyle1 = {
  width: '100%',
  // display: 'flex',
  // height: '40px',
  // marginBottom: '3vh',
  border: '1px solid rgba(255, 255, 255, 0)',
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
// const buttonStyle = {
//   margin: '10px',
//   width: '150px',
//   padding: '12px',
//   backgroundColor: '#3D52D5',
//   border: 'none',
//   borderRadius: '5px',
//   color: '#FFF',
//   fontSize: '16px',
//   cursor: 'pointer',
//   opacity: 1, // Set initial opacity to 1 (fully opaque)
// };

// const disabledButtonStyle = {
//   ...buttonStyle,
//   opacity: 0.5, // Lower opacity when button is disabled
//   cursor: 'not-allowed', // Change cursor to indicate button is disabled
// };

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
  const anchorStyle = {
    color: 'Black',
    textDecoration: 'none',
    fontSize: '17px',
    margin: '20px',
  };





  const headingStyle = {
    fontSize: '26px',
    marginBottom: '20px',
    // backgroundColor: "rgba(255,255,255,0.5)",
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
    setIsAlum(value); // This will update the state to the value of the selected radio button
  setFormData({ ...formData, is_alum: value }); // Also update formData
  // Adjust email type based on whether the user is an alum or not
  if (value) {
    setEmailType("@iitbombay.org");
  } else {
    setEmailType("@iitb.ac.in"); // Change back to IITB email if not an alum
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
        <div className="containerstyle slide-in-left" style={containerStyle}>

      <h1 style={headingStyle}>REGISTER</h1>
      {error && <p className="error">{error}</p>}
      {success && <p style={{color: "green"}} className="error">{`Signup successful, Please check your ${emailtype === "@gmail.com" ? "Gmail": "Webmail"} for verification link!`}</p>}

      <div className='inputfield' style={inputfield}>
      <FontAwesomeIcon icon={faUser} />
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
      <div className='inputfield' style={inputfield}>
      <FontAwesomeIcon icon={faAt} />
      <input
        type="password"
        name='password'
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        style={inputStyle}
      />
      </div>
      <div className='inputfield' style={inputfield}>
      <FontAwesomeIcon icon={faLock} />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        style={inputStyle}
      />
     </div>
      {/* <div style={{backgroundColor: "rgba(255,255,255,0.3)", padding: "5px", borderRadius: "10px"}}>
        Are you an IITB Alum? &nbsp;
        <input onChange={() => handleAlumChange(true)} type="radio" name='is_alum' checked={is_alum} style={{color: "white"}} required /> Yes
        <input onChange={() => handleAlumChange(false)} type="radio" name='is_alum' checked={!is_alum} style={{color: "white"}} required /> No
      </div> */}
      <div style={{
    // backgroundColor: "rgba(255,255,255,0.3)",
    padding: "5px",
    borderRadius: "10px",
    display: "flex", // Use flexbox to align items
    alignItems: "center", // Center align items vertically
    flexWrap: "nowrap"
}}>
    <span style={{whiteSpace: "nowrap", color: "blue"}}> Are you an IITB Alum?</span> {/* Added span for better alignment */}
    <label style={{marginLeft:"40px"}}>
    <input 
        onChange={() => handleAlumChange(true)} 
        type="radio" 
        name='is_alum' 
        checked={is_alum} 
        style={{marginRight: "60px", color: "white" }} 
        required 
    /> 
    Yes
    </label>
    <label>
    <input 
        onChange={() => handleAlumChange(false)} 
        type="radio" 
        name='is_alum' 
        checked={!is_alum} 
        style={{ marginLeft: "1px", marginRight: "2px", color: "white" }} 
        required 
    /> 
    No
    </label>
</div>




      <button onClick={handleSubmit} style={allFieldsFilled() ? buttonStyle : disabledButtonStyle} disabled={!allFieldsFilled()}>REGISTER</button>
      <a className='links' href='/login' style={anchorStyle}>Already a member? Login </a>
        </div>
       
    </div>
  );
}



export default Signup;