import { useState, useEffect } from 'react';
import { json } from 'react-router-dom';

// Define a custom hook for managing the user profile data
function useProfile() {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userData = localStorage.getItem('userData');

  const accessToken = JSON.parse(userData).access;

  console.log(accessToken);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
        ... profileData,
        [name]: value,
    });
};

  const fetchProfileData = async () => {
    try {
      const response = await fetch('/api/authenticate/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }

      const data = await response.json();
      setProfileData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const updateProfileData = async (formData) => {
    try {
      const response = await fetch('/api/authenticate/profile', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`, 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile data');
      }

      // You can optionally fetch updated data here and update the state
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []); // Fetch profile data when the component mounts

  return {
    profileData,
    loading,
    error,
    handleChange,
    updateProfileData,
  };
}

export default useProfile;
