import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useForgotPassword from '../hooks/useForgotPassword';
import bg from "./Authentication/bg.jpg"


function VerifyEmailView() {
    const { key } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [verificationError, setVerificationError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailtype, setEmailType] = useState('@iitb.ac.in');


    const { formData, setFormData, error, success, forgotPassword } = useForgotPassword();

    const handleSubmit = (e) => {
        e.preventDefault();
        forgotPassword(key);
    };


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const [passwordMatch, setPasswordMatch] = useState(false);

    const handleConfirmPasswordChange = (event) => {
      const confirmPasswordValue = event.target.value;
      setConfirmPassword(confirmPasswordValue);
      setPasswordMatch(password === confirmPasswordValue);
    };
  
  
    const allFieldsFilled = () => {
      return (
        password !== "" &&
        passwordMatch
      );
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
                {success && <p style={{ color: "green" }} className="error">{success}</p>}

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


                <button style={password !== "" && passwordMatch ? buttonStyle : disabledButtonStyle} onClick={handleSubmit} disabled={!(password !== "" && passwordMatch)}>
                    Submit
                </button>
            </div>
        </div>
    );




}

export default VerifyEmailView