import { useState } from 'react';
import axios from 'axios';

function useSignup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const apnaCsrf = document.cookie
  .split('; ')
  .find((row) => row.startsWith('csrftoken='))
  .split('=')[1];

  const headers = {
    'Content-Type': 'application/json',
    'X-CSRFToken': apnaCsrf, // Include the CSRF token in the headers
  };

  const signup = () => {
    axios
      .post('/api/authenticate/signup', formData, { headers })
      .then((response) => {
        console.log(response.data);
        setSuccess(true); // Set a success flag to indicate successful signup
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError('An error occurred during signup.');
        }
      });
  };

  return { formData, setFormData, error, success, handleInputChange, signup };
}

export default useSignup;
