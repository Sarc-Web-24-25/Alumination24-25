import { useState } from 'react';
import axios from 'axios';

function useLogin() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  console.log(formData.password);


  const login = () => {
    axios
      .post('http://127.0.0.1:8000/api/authenticate/login', formData, { headers })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('access', response.data.access)
        setSuccess("logged in successfully"); // Set a success flag to indicate successful login
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
          setError(error.response.data.error);
        } else {
          setError('An error occurred during login.');
        }
      });
  };

  return { formData, setFormData, error, success, handleInputChange, login };
}

export default useLogin;
