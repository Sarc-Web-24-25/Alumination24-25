import React, { useEffect, useState } from 'react';
import '../Authentication/profile.css';
import backgroundImage from '../Home/bgimg/i1.png';
import useProfile from '../../hooks/useProfile';


const styles = {

    '@media (max-width: 600px)': {
        formContainer: {
            width: '90%', // Adjust width for smaller screens
            padding: '10px', // Decrease padding for smaller screens
        },
        profilelabel: {
            flexBasis: '100%', // Full width for labels on mobile
            marginBottom: '5px',
            // Reduce spacing between label and input
            fontSize: '10px !important'
        },
        profileinput: {
            width: '100%', // Full width for input fields on mobile
        },
        textarea: {
            width: '100%', // Full width for textareas on mobile
        },
        submitButton: {
            width: '100%', // Full width for submit button on mobile
        },
        headingContainer: {
            margin: '10vh 20vw !important',
        }
    },

    mainContainer: {
        backgroundImage: `url(${backgroundImage})`,
        display: 'flex', // Use flex to position items to the center
        flexDirection: 'column', // Stack the items vertically
        width: '100vw', // Set full width
        height: '100vh', // Set full height
        backgroundPosition: 'center', // Position the background image
        backgroundSize: 'cover', // Cover the entire area of the container
        margin: '0', // Remove default margin
        padding: '0', // Remove default padding
        justifyContent: 'center', // Vertically center the items
        overflow: 'scroll', // Add scroll to the container
    },

    profileformArea: {
        color: 'white',
        fontFamily: "'Inknut Antiqua",
        textAlign: 'center', // Align the content to the center
        display: 'flex', // Use flex to align items to the center
        justifyContent: 'space-evenly', // Align horizontally
        alignItems: 'center', // Align horizontally
    },
    formContainer: {
        width: '70%',
        borderRadius: '20px',
    },
    headingContainer: {
        textAlign: 'center',
        borderRadius: '10vw',
        fontSize: '32px',
        padding: '10px',
    },
    profHead: {
        textDecoration: 'none', // Remove underline from the text itself
    },
    constituents: {
        display: 'flex', // Use flex to place label and input on the same line
        alignItems: 'center', // Vertically center the content
        // margin: '10px 0',
        margin: '1%',
        width: '100%',

        // Add space between label and input field
    },
    constituents3: {
        display: 'flex', // Use flex to place label and input on the same line
        alignItems: 'center', // Vertically center the content
        // margin: '10px 0',
        margin: '10px 225px',
        width: '709px',

        // Add space between label and input field
    },
    constituents2: {
        display: 'flex', // Use flex to place label and input on the same line
        alignItems: 'center', // Vertically center the content
        margin: '10px 100px',
        width: '600px',
        // Add space between label and input field
    },
    profilelabel: {
        flexBasis: '20%', // Adjust the label width as needed
        marginRight: '10px',
        // marginleft: '1000px',
        width: '10px',
        color: "#fff",

        fontSize: '20px'
    },
    input: {
        flexBasis: '70%', // Adjust the input width as needed
        border: 'none',
        borderBottom: '1px solid #ccc',
        padding: '5px',
        borderRadius: '1rem',
        outline: 'none',
        backgroundColor: "rgb(189 212 231 / 65%)",

        color: "#000",
        fontSize: '20px'
    },
    textarea: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid #ccc',
        padding: '10px',
        borderRadius: '2rem',
        outline: 'none',

        backgroundColor: "rgb(189 212 231 / 65%)",
        height: '150px'
    },
    textCenter: {
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '40px',
    },
    submitButton: {
        margin: '10px',
        width: '150px',
        padding: '12px',
        backgroundColor: "rgb(10 62 109 / 92%)",
        border: 'none',
        alignItems: 'center',
        borderRadius: '50px',
        marginRight: '-100px',

        color: '#FFF',
        fontSize: '16px',
    },
};




function Profile() {
    const [formData, setFormData] = useState({
        rollno: '',
        fullname: '',
        email: '',
        is_alumni: false,
        is_verified: false,
        address: '',
        personal_email: '',
        dob: '',
        hostel: '',
        room_no: '',
        department: '',
        program: '',
        degree: '',
        join_year: '',
        graduation_year: '',
        gender: '',
        career: '',
        phoneno: '',
    });



    const { profileData, loading, error, handleChange, updateProfileData, } = useProfile();

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateProfileData();
    };

    return (
        <div style={styles.mainContainer}>
            <div className="profileform-area" style={styles.profileformArea}>
                <div className="heading-container" style={styles.headingContainer}>
                    User Profile
                    <div className="user-profile">
                        <img className="profile-picture" alt="profile pic" />
                    </div>
                </div>

                <div className="profileform-container" style={styles.formContainer}>
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="rollno" style={styles.profilelabel}>Roll Number</label>
                        <input
                            id="rollno"
                            name="rollno"
                            type="text"
                            value={profileData.rollno}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="fullname" style={styles.profilelabel}>Full Name</label>
                        <input
                            id="fullname"
                            name="fullname"
                            type="text"
                            value={profileData.fullname}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>


                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="email" style={styles.profilelabel}>Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={profileData.email}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="address" style={styles.profilelabel}>Address</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            value={profileData.address}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="personal_email" style={styles.profilelabel}>Personal Email:</label>
                        <input
                            id="personal_email"
                            name="personal_email"
                            type="email"
                            value={profileData.personal_email}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="dob" style={styles.profilelabel}>Date of Birth</label>
                        <input
                            id="dob"
                            name="dob"
                            type="date"
                            value={profileData.dob}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="hostel" style={styles.profilelabel}>Hostel</label>
                        <input
                            id="hostel"
                            name="hostel"
                            type="text"
                            value={profileData.hostel}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="room_no" style={styles.profilelabel}>Room Number</label>
                        <input
                            id="room_no"
                            name="room_no"
                            type="number"
                            value={profileData.room_no}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="department" style={styles.profilelabel}>Department</label>
                        <input
                            id="department"
                            name="department"
                            type="text"
                            value={profileData.department}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>

                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="join_year" style={styles.profilelabel}>Join Year</label>
                        <input
                            id="join_year"
                            name="join_year"
                            type="number"
                            value={profileData.join_year}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="graduation_year" style={styles.profilelabel}>Graduation Year</label>
                        <input
                            id="graduation_year"
                            name="graduation_year"
                            type="number"
                            value={profileData.graduation_year}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>



                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="gender" style={styles.profilelabel}>Gender:</label>
                        <input
                            id="gender"
                            name="gender"
                            type="text"
                            value={profileData.gender}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>



                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="career" style={styles.profilelabel}>Career:</label>
                        <input
                            id="career"
                            name="career"
                            type="text"
                            value={profileData.career}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>


                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="phoneno" style={styles.profilelabel}>Phone no:</label>
                        <input
                            id="phoneno"
                            name="phoneno"
                            type="text"
                            value={profileData.phoneno}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>

                </div>
                {/* Submit Button */}

            </div>
            <button
                type="submit"
                className="submitButton"
                onClick={handleSubmit} // Handle form submission here
                style={styles.submitButton}
            >
                Submit
            </button>
        </div>
    );
}


export default Profile;