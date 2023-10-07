import { useState } from 'react';
import axios from 'axios';

function useSignup() {


  const [is_alum, setIsAlum] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    is_alum: is_alum,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const headers = {
    'Content-Type': 'application/json',
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

  return { formData, setFormData, setIsAlum, error, success, handleInputChange, signup };
}

export default useSignup;
