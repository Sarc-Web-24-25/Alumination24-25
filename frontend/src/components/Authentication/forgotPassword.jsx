

import React, { useState } from 'react';
import bg from "./bglogin.png"
import useLogin from '../../hooks/useLogin';
import { Navigate } from 'react-router-dom';
import useSendPasswordLink from '../../hooks/useSendPasswordLink';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailtype, setEmailType] = useState('@iitb.ac.in');


  const { formData, setFormData, error, success, forgotPassword } = useSendPasswordLink();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, username: email + emailtype });
    forgotPassword();
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
    height: '70vh',
    padding: '30px',
    margin: '20px',
    backgroundColor: '#45382C',
    opacity: '80%',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyle = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    height: '50px',
    marginBottom: '3%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    alignItems: 'center',
    justifyContent: 'center',
  };


  const inputStyle1 = {
    width: '50%',
    display: 'flex',
    height: '50px',
    marginBottom: '3%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    alignItems: 'center',
    justifyContent: 'center',
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

  const disabledButtonStyle = {
    ...buttonStyle,
    opacity: 0.5, // Lower opacity when button is disabled
    cursor: 'not-allowed', // Change cursor to indicate button is disabled
  };

  const anchorStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '20px',
    margin: '5px',
  };

  if (localStorage.getItem('userData')) {
    return <Navigate to="/" />;
  }

  return (
    <div style={frameStyle}>
      <div style={containerStyle}>
        <h1>Forgot Password</h1>
        {error && <p className="error">{error}</p>}
        {success && <p style={{color: "green"}} className="error">{success}</p>}
        <div style={{ display: "flex" }}>
          <input
            type="text"
            name='username'
            style={inputStyle1}
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
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
        <button style={email !== "" ? buttonStyle: disabledButtonStyle} onClick={handleSubmit} disabled={!(email !== "")}>
            Submit
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
