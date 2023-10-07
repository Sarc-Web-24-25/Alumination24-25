import { useState } from 'react';
import axios from 'axios';

function useSendPasswordLink() {

  const [formData, setFormData] = useState({
    username: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);

  const headers = {
    'Content-Type': 'application/json',
  };

  const forgotPassword = () => {
    axios
      .post('/api/authenticate/sendForgotPasswordLink', formData, { headers })
      .then((response) => {
        console.log(response.data);
        setSuccess("Password link sent to email"); // Set a success flag to indicate successful login
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

export default useSendPasswordLink;
