import React, { useState } from 'react';
import bg from "./bg.jpg"
import useSignup from '../../hooks/useSignup';




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
  width: '320px',
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
  const departments = ["Department 1", "Department 2", "Department 3"];
  const degrees = ["Degree 1", "Degree 2", "Degree 3"];
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    setPasswordMatch(password === confirmPasswordValue);
  };

  const isValidEmail = (email) => {
    // Use a regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
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
  };


  const { formData, setFormData, error, success, handleInputChange, signup } = useSignup();

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup();
  };


  return (

    <div style={formStyle}>

      <h1 style={headingStyle}>REGISTER</h1>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Signup successful, Please check your webmail for verification link!</p>}

      <input name='username' type="text" placeholder="Roll Number" value={rollNumber} onChange={handleRollNumberChange} style={inputStyle} />

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

      <button onClick={handleSubmit} style={allFieldsFilled() ? buttonStyle : disabledButtonStyle} disabled={!allFieldsFilled()}>REGISTER</button>

    </div>
  );
}



export default Signup;
