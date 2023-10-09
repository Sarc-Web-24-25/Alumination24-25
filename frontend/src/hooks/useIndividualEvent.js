import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import letter from "../components/Home/bgimg/letter.png";

function useIndividualEvent() {
  const [event, setEvent] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
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
    axios
      .put(`api/events/${key}`,{}, { headers })
      .then((response) => {
        console.log(response.data);
        setSuccess("registered successfully"); // Set a success flag to indicate successful login
        Swal.fire({
          icon: "success",
          title: "Registered Successfully",
          text: "You have been registered successfully for the event",
          iconColor: "brown",
          background: `url(${letter})`,
        }).then(() => {
          window.location.reload();
        } );
      })
      .catch((error) => {
         Swal.fire({
            icon: "error",
            title: "Error",
            iconColor: "brown",
            background: `url(${letter})`,
            text: error.response.data.error,
         }).then(() => {
            if(error.response.data.error === "Profile does not exist, Please create a profile first"){
                window.location.href = "/profile";
            }
         });
      });
  };

  const fetchEvent = (key) => {
    axios
      .get(`api/events/${key}`)
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

  return { event, error, success, fetchEvent, register };
}

export default useIndividualEvent;
