import { useState } from 'react';
import axios from 'axios';

function useForgotPassword() {

  const [formData, setFormData] = useState({
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);

  const headers = {
    'Content-Type': 'application/json',
  };

  const forgotPassword = (key) => {
    axios
      .post(`http://127.0.0.1:8000/api/authenticate/resetPassword/${key}/`, formData, { headers })
      .then((response) => {
        console.log(response.data);
        setSuccess("Password changed successfully, you can now login"); // Set a success flag to indicate successful login
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError('An error occurred during login.');
        }
      });
  };

  return { formData, setFormData, error, success, forgotPassword };
}

export default useForgotPassword;
