import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import letter from './Home/bgimg/letter.png'

function UserRestrictedRoute() {
    const user = JSON.parse(localStorage.getItem('userData'));
    if(!user){
        Swal.fire({
            title: 'Please login first!',
            icon: 'warning',
            confirmButtonText: 'OK',
            confirmButtonColor: 'brown',
            background: `url(${letter})`,
            iconColor: 'brown',
        });
    }
    return (
        user ? <Outlet /> : <Navigate to="/login" />
    );
}

export default UserRestrictedRoute;