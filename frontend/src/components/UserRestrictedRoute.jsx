import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function UserRestrictedRoute() {
    const user = JSON.parse(localStorage.getItem('userData'));
    return (
        user ? <Outlet /> : <Navigate to="/login" />
    );
}

export default UserRestrictedRoute;