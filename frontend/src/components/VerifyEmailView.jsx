import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import letter from './Home/bgimg/letter.png'

function VerifyEmailView() {
    const { key } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [verificationError, setVerificationError] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        axios.post(`/api/authenticate/verify/${key}/`)

        .then((response) =>{
          Swal.fire({
            title: 'Verification Successful',
            text: 'You can now login',
            width: 600,
            icon:'success',
            iconColor: 'brown',
            confirmButtonText: 'OK',
            confirmButtonColor: 'brown',
            padding: '3em',
            background: `url(${letter})`,
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://media.tenor.com/-AyTtMgs2mMAAAAi/nyan-cat-nyan.gif")
              left bottom 
              no-repeat
            `
          }).then(result => {
            if(result.isConfirmed) {
              window.location.href = "/login"
            }
          })
          setVerificationError(false);
        })

        
        .catch((error) => {
          Swal.fire({
            title: 'Verification Failed',
            text: 'Please contact the developers.',
            icon: 'error',
            iconColor: 'brown',
            confirmButtonColor: 'brown',
            background: `url(${letter})`,
            confirmButtonText: 'OK'
          })
            setVerificationError(true);
        })

       
    }, []);



    return (
      <Navigate to="/" />
    )


}

export default VerifyEmailView