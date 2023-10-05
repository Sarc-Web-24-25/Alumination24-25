import { useState, useEffect } from 'react';

// Define a custom hook for managing the user profile data
function useProfile() {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch user profile data from the backend
  const fetchProfileData = async () => {
    try {
      const response = await fetch('/api/profile/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${yourAccessToken}`,
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

  // Function to update user profile data
  const updateProfileData = async (formData) => {
    try {
      const response = await fetch('/api/profile/', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${yourAccessToken}`, 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
    updateProfileData,
  };
}

export default useProfile;
