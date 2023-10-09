import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function Logout() {
  useEffect(() => {
    const handleLogout = () => {
      localStorage.removeItem('userData');
      localStorage.removeItem('profileData');
    };

    handleLogout();
  }, []);

  return <Navigate to="/" />;
}

export default Logout;