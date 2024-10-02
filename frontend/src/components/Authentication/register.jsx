// import React, { useState } from 'react';
// import './register.css';  // CSS file for animations
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

// function Register() {
//   const [isLogin, setIsLogin] = useState(true);  // To toggle between login and register
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailtype, setEmailType] = useState('@iitb.ac.in');
//   // const audio = new Audio(loginSound);

//   const { formData, setFormData, error, success, handleInputChange, login } = useLogin();
//   // const playLoginSound = () => {
//   //   audio.play();
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData({ ...formData, username: email + emailtype });
//     login();

//     // // Play the login sound
//     // playLoginSound();
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value + emailtype });
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };


//   const handleEmailTypeChange = (event) => {
//     setEmailType(event.target.value);
//     setFormData({ ...formData, username: email + event.target.value });
//   }


//   // Function to handle the transition between login and register
//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="auth-container">
//       <div className={`form-container ${isLogin ? 'slide-right' : 'slide-left'}`}>
//         {/* Login Form */}
//         {isLogin ? (
//           <div className="login-form">
//            <h1 style={{fontWeight: "bold", color: "black", marginBottom:"50px",marginTop:'100px'}}>LOGIN</h1>
//         {error && <p className="error">{error}</p>}
//         {success && <p style={{ color: "white" }} className="success">{success}</p>}
//         <div style={inputfield}>
//         <FontAwesomeIcon icon={faUser} />
//           <input
//             type="text"
//             name='username'
//             style={inputStyle}
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           <select
//             name="emailtype"
//             id="emailtype"
//             style={inputStyle}
//             onChange={handleEmailTypeChange}
//             value={emailtype}
//           >
//             <option value="@iitb.ac.in" default>
//               @iitb.ac.in
//             </option>
//             <option value="@iitbombay.org">@iitbombay.org</option>
//             <option value="@gmail.com">@gmail.com</option>
//           </select>
//         </div>
//         <div style={inputfield}>
//         <FontAwesomeIcon icon={faLock} />
//         <input
//           name='password'
//           type="password"
//           style={inputStyle1}
//           placeholder="Password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         </div>
//         <a className='links' href='/forgotPassword' style={anchorStyle}>Forgot password?</a>
//         <button className='login-button' style={password !== "" && email !== "" ? buttonStyle: disabledButtonStyle} onClick={handleSubmit} disabled={!(password !== "" && email !== "")}>
//           LOGIN
//         </button>
//         <a className='links' href='/signup' style={anchorStyle}>New user ? Register here!</a>
//           </div>
//         ) : (
//           /* Register Form */
//           <div className="register-form">
//             <h2>REGISTER</h2>
//             <div className="input-group">
//               <input type="text" placeholder="Email" />
//               <input type="password" placeholder="Password" />
//               <input type="password" placeholder="Confirm Password" />
//             </div>
//             <label>Are you an IITB Alum? <input type="radio" name="alum" /> Yes <input type="radio" name="alum" /> No</label>
//             <button>REGISTER</button>
//             <p>Already a member? <span onClick={toggleForm}>Login</span></p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Register;
