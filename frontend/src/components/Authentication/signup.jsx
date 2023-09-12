import React, { useState } from 'react';
import bg from "./bg.jpg"



const inputStyle = {
  width: '300px',
  padding: '10px',
  margin: '5px 0',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
  backgroundColor: '#fff' ,
  
};
const inputStyle1 = {
  width: '320px',
  padding: '10px',
  margin: '5px 0',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
  backgroundColor: '#fff' ,
  
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
  const departments = ["Department 1", "Department 2", "Department 3"]; // Add your department options
  const degrees = ["Degree 1", "Degree 2", "Degree 3"]; // Add your degree options
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

  
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleDepartmentChange = (event) => setDepartment(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleDegreeChange = (event) => setDegree(event.target.value);
  const handleContactNumberChange = (event) => setContactNumber(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleRollNumberChange = (event) => setRollNumber(event.target.value);

  const allFieldsFilled = () => {
    return (
      isValidEmail(email) &&
      department !== "" &&
      degree !== "" &&
      name !== "" &&
      contactNumber !== "" &&
      password !== "" &&
      rollNumber !== "" &&
      confirmPassword !== "" &&
      passwordMatch
    );
  };
   

  const handleRegistration = () => {
    // Simulate registration logic (replace with actual registration code)
  
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

  return (

    <div style={formStyle}>
      
      <h1 style={headingStyle}>REGISTER</h1>
      <input type="text" placeholder="Name" value={name} onChange={handleNameChange} style={inputStyle} required />
      <input type="email" placeholder="Email ID" value={email} onChange={handleEmailChange}  required  style={{
          ...inputStyle,
          border: (isValidEmail(email) || email==='') ? '' : '2px solid red'
        }} />

      <input type="text" placeholder="Contact Number" value={contactNumber} onChange={handleContactNumberChange} style={inputStyle} />
      <select value={department} onChange={handleDepartmentChange} style={inputStyle1} required>
        <option value="" disabled>Select Department</option>
        {departments.map((dept, index) => (
          <option key={index} value={dept}>{dept}</option>
        ))}
      </select>
      <select value={degree} onChange={handleDegreeChange} style={inputStyle1}>
        <option value="" disabled>Select Degree</option>
        {degrees.map((deg, index) => (
          <option key={index} value={deg}>{deg}</option>
        ))}
      </select>
      
      <input
        type="password"
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
      
      <input type="text" placeholder="Roll Number" value={rollNumber} onChange={handleRollNumberChange} style={inputStyle} />
      <button onClick={handleRegistration} style={allFieldsFilled() ? buttonStyle : disabledButtonStyle}
        disabled={!allFieldsFilled()}   >REGISTER</button>
      
    </div>
  );
}



export default Signup;
