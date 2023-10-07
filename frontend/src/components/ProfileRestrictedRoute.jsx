import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function ProfileRestrictedRoute() {
    const profile = JSON.parse(localStorage.getItem('profileData'));
  return (
    profile ?  <Outlet/> : <Navigate to="/profile" />
  );
}

export default ProfileRestrictedRoute;