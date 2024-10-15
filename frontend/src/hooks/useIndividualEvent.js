import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import message_background from '../components/Home/photos24/message_background.jpg'

function useIndividualEvent() {
  const [event, setEvent] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [otherDetails, setOtherDetails] = useState({});
  try {
    var userData = localStorage.getItem("userData");
    userData = JSON.parse(userData);
  }catch{
    userData = null;
  }

  if(userData){
    var accessToken = userData.access;
    }else{
        accessToken = null;
    }

  const headers = {
    "Content-Type": "application/json",
     Authorization: `Bearer ${accessToken}`,
  };

  const register = (key) => {
    console.log(otherDetails);
    axios
      .put(`https://alumination.sarc-iitb.org/api/events/${key}`,otherDetails, { headers })
      .then((response) => {
        console.log(response.data);
        setSuccess("registered successfully"); // Set a success flag to indicate successful login
        Swal.fire({
          icon: "success",
          title: '<span style="color: black;">Registered Successfully</span>',
          html: `<span style="color: beige;">You have been registered successfully for the event</span>`,
          iconColor: "brown",
          background: `url(${message_background})`,
        }).then(() => {
          window.location.reload();
        } );
      })
      .catch((error) => {
         Swal.fire({
            icon: "error",
            title: '<span style="color: black;">Error</span>',
            iconColor: "brown",
            background: `url(${message_background})`,
            html: `<span style="color: beige;">${error.response.data.error}</span>`,
         }).then(() => {
            if(error.response.data.error === "Profile does not exist, please create a profile or complete existing profile"){
                window.location.href = "/profile";
            }
         });
      });
  };

  const fetchEvent = (key) => {
    axios
      .get(`https://alumination.sarc-iitb.org/api/events/${key}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setError(error.response.data.error);
        } else {
          setError("An error occurred");
        }
      });
  };

  return { event,otherDetails, setOtherDetails, error, success, fetchEvent, register };
}

export default useIndividualEvent;
