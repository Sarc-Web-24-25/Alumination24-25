import React, { useEffect, useState } from 'react';
import '../Authentication/profile.css';
import backgroundImage from '../Home/bgimg/i1.png';

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

    profileformArea: {
        //   backgroundColor: '#000',
        backgroundImage: `url(${backgroundImage})`,

        color: 'white',
        fontFamily: "'Inknut Antiqua",
        textAlign: 'center', // Align the content to the center
        padding: '20px',
    },
    formContainer: {
        margin: '0 auto',
        padding: '20px',
        width: '80%',

        //   backgroundColor: '#000',
        borderRadius: '20px',
    },
    headingContainer: {
        textAlign: 'center',
        marginBottom: '20px', // Add space below the heading
        //   backgroundColor: '#3D52D5',
        //   boxShadow: '0px 0px 3px 7px #FFF',
        borderRadius: '10vw',
        margin: '10vh 37vw',
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
        margin: '10px 122px',
        width: '879px',

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

export default function Signup() {
    return (
        <div>
            <div className="profileform-area" style={styles.profileformArea}>
                <div className="heading-container" style={styles.headingContainer}>

                    User Profile
                    <div className="user-profile">
                        <img
                            className="profile-picture"
                            src="https://.licdn.com/dms/image/D4D03AQHhwo3NFMddCg/profile-displayphoto-shrink_400_400/0/1680935085863?e=1700092800&v=beta&t=u7PmS6PGCJHoIVLmMyDYLdSST0D8p-eZ--Lrd43lmkk"
                            alt="User Profile"
                        />
                    </div>

                </div>
                <div className="profileformmain">
                    <div className="profileform-container" style={styles.formContainer}>
                        <div className="pinfo align-items-center">
                            <div className="pinfo-constituents" style={styles.constituents}>
                                <label htmlFor="Field10" style={styles.profilelabel}>Roll Number</label>
                                <input
                                    id="Field10"
                                    name="linkedin"
                                    type="text"
                                    className="field text fn"
                                    // placeholder='Roll Number'

                                    // value={profile.linkedin}
                                    // onChange={handleInputChange}
                                    style={styles.input}
                                />
                            </div>
                            <div className="pinfo-constituents" style={styles.constituents}>
                                <label htmlFor="Field11" style={styles.profilelabel}>Username</label>
                                <input
                                    id="Field11"
                                    name="personal_email"
                                    type="email"
                                    className="field text fn"
                                    // value={profile.personal_email}
                                    // onChange={handleInputChange}
                                    style={styles.input}
                                    required
                                />
                            </div>
                            <div className="pinfo-constituents" style={styles.constituents}>
                                <label htmlFor="Field11" style={styles.profilelabel}>LDAP Email*</label>
                                <input
                                    id="Field11"
                                    name="personal_email"
                                    type="email"

                                    className="field text fn"
                                    // value={profile.personal_email}
                                    // onChange={handleInputChange}
                                    style={styles.input}
                                    required
                                />
                            </div>
                            <div className="pinfo-constituents" style={styles.constituents}>
                                <label htmlFor="Field11" style={styles.profilelabel}>Personal Email*</label>
                                <input
                                    id="Field11"
                                    name="personal_email"
                                    type="email"

                                    className="field text fn"
                                    // value={profile.personal_email}
                                    // onChange={handleInputChange}
                                    style={styles.input}
                                    required
                                />
                            </div>
                            <div className="pinfo-constituents" style={styles.constituents3}>
                                <label htmlFor="Field11" style={styles.profilelabel}></label>
                                <input
                                    id="Field11"
                                    name="personal_email"
                                    type="email"
                                    style={{ ...styles.input, textAlign: 'center', color: 'black' }}
                                    placeholder='Hostel'
                                    className="field text fn"
                                    // value={profile.personal_email}
                                    // onChange={handleInputChange}
                                    // style={styles.input}
                                    required
                                />

                                <label htmlFor="Field11" style={styles.profilelabel}></label>
                                <input
                                    id="Field11"
                                    name="personal_email"
                                    type="email"
                                    placeholder='Room No.'

                                    className="field text fn input"
                                    // value={profile.personal_email}
                                    // onChange={handleInputChange}
                                    style={{ ...styles.input, textAlign: 'center' }}
                                    required
                                />

                            </div >
                            <div className="pinfo-constituents align-items-center" style={styles.constituents3}>
                                <label htmlFor="Field11" style={styles.profilelabel}>

                                </label>
                                <select
                                    id="Field11"
                                    name="personal_email"
                                    className="field select fn" // You can apply the appropriate classes
                                    // value={profile.personal_email}
                                    // onChange={handleInputChange}
                                    // style={styles.input, textAlign: 'center'}
                                    style={{ ...styles.input, textAlign: 'center' }}
                                    required
                                >
                                    {/* Add your options here */}
                                    <option value="">  Program*</option>
                                    <option value="email1@example.com">Email 1</option>
                                    <option value="email2@example.com">Email 2</option>
                                    <option value="email3@example.com">Email 3</option>
                                    {/* Add more options as needed */}
                                </select>
                                {/* </div>
<div className="pinfo-constituents" style={styles.constituents2}> */}
                                <label htmlFor="Field11" style={styles.profilelabel}>
                                </label>
                                <select
                                    id="Field11"
                                    name="personal_email"
                                    className="field select fn" // You can apply the appropriate classes
                                    // value={profile.personal_email}
                                    // onChange={handleInputChange}
                                    style={{ ...styles.input, textAlign: 'center' }}
                                    required
                                >
                                    {/* Add your options here */}
                                    <option value="">Department  </option>
                                    <option value="email1@example.com">Email 1</option>
                                    <option value="email2@example.com">Email 2</option>
                                    <option value="email3@example.com">Email 3</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            <div className="constituents3" style={styles.constituents3}>
                                <label htmlFor="Field11" className="constituents3" style={styles.profilelabel}>

                                </label>
                                <select
                                    id="Field11"
                                    name="personal_email"
                                    className="field select fn" // You can apply the appropriate classes
                                    // value={profile.personal_email}
                                    // onChange={handleInputChange}
                                    style={{ ...styles.input, textAlign: 'center' }}
                                    required
                                >
                                    {/* Add your options here */}
                                    <option value="">  Joining year*</option>
                                    <option value="email1@example.com">Email 1</option>
                                    <option value="email2@example.com">Email 2</option>
                                    <option value="email3@example.com">Email 3</option>
                                    {/* Add more options as needed */}
                                </select>
                                {/* </div>
<div className="pinfo-constituents" style={styles.constituents2}> */}
                                <label htmlFor="Field11" style={styles.profilelabel}>

                                </label>
                                <select
                                    id="Field11"
                                    name="personal_email"
                                    className="field select fn" // You can apply the appropriate classes
                                    // value={profile.personal_email}
                                    // onChange={handleInputChange}
                                    style={{ ...styles.input, textAlign: 'center' }}
                                    required
                                >
                                    {/* Add your options here */}
                                    <option value="">  Graduating year*</option>
                                    <option value="email1@example.com">Email 1</option>
                                    <option value="email2@example.com">Email 2</option>
                                    <option value="email3@example.com">Email 3</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                        </div>

                        {/* <div style={styles.textCenter}>
            <label htmlFor="Field6" style={styles.profilelabel}>Why do you want to have a mentor and what do you want to learn from the mentor? 
Include your previous works or experience*</label>
          </div>
          <div>
            <textarea
              id="Field6"
              name="sop"
              spellCheck="true"
              rows="5"
              cols="30"
            //   value={profile.sop}
            //   onChange={handleInputChange}
              style={styles.textarea}
              required
            />
          </div> */}
                        {/* {error1 && <div style={{ color: "red" }}>{error1}</div>} */}
                        <div style={styles.textCenter}>
                            {/* <button disabled={!check} onClick={handleSubmit} className="submit-button" style={styles.submitButton}>
              Save
            </button> */}
                            <button type="submit" style={styles.submitButton}>
                                Save
                            </button>

                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}