import { useState, useEffect } from 'react';
import { json } from 'react-router-dom';
import Swal from 'sweetalert2';
import defaultProfile from './defaultProfile.png';
import letter from '../components/Home/bgimg/letter.png';

// Define a custom hook for managing the user profile data
function useProfile() {
  const [profileData, setProfileData] = useState({
    "profile_pic": defaultProfile,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(defaultProfile);

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
      const response = await fetch('http://127.0.0.1:8000/api/authenticate/profile', {
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
      setUrl(data.profile_pic);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const updateProfileData = async (formData) => {
    try {


      const formData = new FormData();


      Object.entries(profileData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if(typeof profileData.profile_pic === 'string'){
        formData.delete('profile_pic');
      }


      const response = await fetch('http://127.0.0.1:8000/api/authenticate/profile', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`, 
          // 'Content-Type': 'application/json',
        },
        body: formData,
      });

      if (response.status === 404 || response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.error,
          iconColor: 'brown',
          background: `url(${letter})`,
        })
      }
      else if(response.status === 203){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Please fill all the fields',
          iconColor: 'brown',
          background: `url(${letter})`,
        })
      }
      
      else{
        Swal.fire({
          icon: 'success',
          title: 'Profile updated successfully',
          showConfirmButton: true,
          iconColor: 'brown',
          background: `url(${letter})`,
        }).then((result) => {
          if (result.isConfirmed) {
            fetchProfileData();
          }
        })
      }

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
    setProfileData,
    url,
    setUrl,
  };
}

export default useProfile;
