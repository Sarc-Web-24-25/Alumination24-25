import React, { useEffect, useState } from 'react';
import '../Authentication/profile.css';
import backgroundImage from '../Home/bgimg/i1.png';
import useProfile from '../../hooks/useProfile';
import Swal from 'sweetalert2';


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
        overflow: 'scroll', // Add scroll to the container
        alignItems: 'center', // Horizontally center the items
        paddingTop: '8vh',
    },

    profileformArea: {
        color: 'white',
        fontFamily: "'Inknut Antiqua",
        textAlign: 'center', // Align the content to the center
        display: 'flex', // Use flex to align items to the center
        justifyContent: 'space-evenly', // Align horizontally
        alignItems: 'center', // Align horizontally
        width: '100%', // Set full width
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
        paddingLeft: '15px',
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
        marginTop: '3vh',
        width: '20vw',
        padding: '12px',
        backgroundColor: "rgb(10 62 109 / 92%)",
        border: 'none',
        alignItems: 'center',
        borderRadius: '50px',
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
        personal_email: '',
        hostel: '',
        department: '',
        program: '',
        degree: '',
        graduation_year: '',
        gender: '',
        phoneno: '',
    });


    const DEPARTMENTS = {
        "Aerospace Engineering": "Aerospace Engg",
        "Animation": "Animation",
        "Application Software Centre": "ASC",
        "Applied Geophysics": "Applied Geophysics",
        "Applied Statistics and Informatics": "ASI",
        "Biomedical Engineering": "Biomedical Engg",
        "Biosciences and Bioengineering": "Biosciences & BioEngg",
        "Biotechnology": "Biotechnology",
        "Centre for Aerospace Systems Design and Engineering": "CASDE",
        "Centre for Distance Engineering Education Programme": "CDEEP",
        "Environmental Science and Engineering": "ESE",
        "Centre for Formal Design and Verification of Software": "CFDVS",
        "Centre for Research in Nanotechnology and Science": "CRNS",
        "Centre for Technology Alternatives for Rural Areas": "CTARA",
        "Centre for Urban Science and Engineering": "CUSE",
        "Centre of Studies in Resources Engineering": "CSRE",
        "Chemical Engineering": "Chemical Engg",
        "Chemistry": "Chemistry",
        "Civil Engineering": "Civil Engg",
        "Climate Studies": "Climate Studies",
        "Computer Centre": "CC",
        "Computer Science & Engineering": "CSE",
        "Continuing Education Programme": "CEP",
        "Corrosion Science and Engineering": "Corrosion Science & Engg",
        "Desai Sethi Centre for Entrepreneurship": "DSCE",
        "Earth Sciences": "Earth Sciences",
        "Educational Technology": "Educational Technology",
        "Electrical Engineering": "EE",
        "Energy Science and Engineering": "Energy Science and Engg",
        "Economics (HSS)": "Economics",
        "Engineering Physics": "Engineering Physics",
        "Humanities & Social Science": "HSS",
        "IITB-Monash Research Academy": "IITB-Monash",
        "Industrial Design Centre": "IDC",
        "Industrial Engineering and Operations Research": "IEOR",
        "Industrial Management": "Industrial Management",
        "Interaction Design": "Interaction Design",
        "Kanwal Rekhi School of Information Technology": "KRSIT",
        "Material Science": "Material Science",
        "Materials, Manufacturing and Modelling": "Materials, Manufacturing and Modelling",
        "Mathematics": "Mathematics",
        "Mechanical Engineering": "Mechanical Engg",
        "Metallurgical Engineering & Materials Science": "MEMS",
        "Mobility and Vehicle Design": "Mobility and Vehicle Design",
        "National Centre for Aerospace Innovation and Research": "NCAIR",
        "National Centre for Mathematics": "NCM",
        "Physical Education": "Physical Education",
        "Physics": "Physics",
        "Physics, Material Science": "Physics, Material Science",
        "Preparatory Course": "Preparatory Course",
        "Reliability Engineering": "Reliability Engineering",
        "Shailesh J. Mehta School of Management": "SJM-SOM",
        "Sophisticated Analytical Instrument Facility": "Sophisticated Analytical Instrument Facility",
        "Systems and Control Engineering": "SysCon Engg",
        "Tata Center for Technology and Design": "Tata Center",
        "Technology and Development": "Tech and Dev",
        "Visual Communication": "Visual Communication",
        "Wadhwani Research Centre for Bioengineering": "Wadhwani Research Centre",
        "Centre for Policy Studies": "Centre for Policy Studies",
        "Institute Body": "Institute Body",
    }

    const DEGREES = {
        "FYBS": "Four Year BS",
        "BTECH": "Bachelor of Technology",
        "MTECH": "Master of Technology",
        "DD": "B.Tech. + M.Tech. Dual Degree",
        "MSC": "Master of Science",
        "PHD": "Doctor of Philosophy",
        "BDES": "Bachelor of Design",
        "MDES": "Master of Design",
        "MPHIL": "Master of Philosophy",
        "MMG": "Master of Management",
        "MtechEx": "Master of Technology (Exit Degree)",
        "MSEx": "M.S. (Exit Degree)",
        "MtechPhDDD": "M.Tech. + Ph.D. Dual Degree",
        "PC": "Preparatory Course",
        "VS": "Visiting Student",
        "MPhilEx": "Master of Philosophy (Exit Degree)",
        "MScEx": "Master of Science (Exit Degree)",
        "MScMTechDD": "M.Sc. + M.Tech. Dual Degree",
        "MScPhDDD": "M.Sc. + Ph.D. Dual Degree",
        "MPhilPhDDD": "M.Phil. + Ph.D. Dual Degree",
        "EMBA": "Executive MBA",
        "IMTECH": "Integrated M.Tech.",
        "MSCBR": "Master of Science By Research",
        "TYMSC": "Two Year M.Sc.",
        "FYIMSC": "Five Year Integrated M.Sc.",
        "DIIT": "D.I.I.T.",
        "DIITEx": "D.I.T.T. (Exit Degree)",
        "_": "_",
    }


    const GENDER = { "M": "Male", "F": "Female", "O": "Other", "P": "Prefer not to say" }


    const departmentOptions = Object.entries(DEPARTMENTS).map(([key, value]) => (
        <option key={value} value={key}>
            {key}
        </option>
    ));

    const degreeOptions = Object.entries(DEGREES).map(([key, value]) => (
        <option key={value} value={key}>
            {value}
        </option>
    ));

    const genderOptions = Object.entries(GENDER).map(([key, value]) => (
        <option key={value} value={key}>
            {value}
        </option>
    ));

    const PROGRAM = {
        "ug": "Undergraduate",
        "dd": "Dual Degree",
        "pg": "Postgraduate",
        "idddp": "Inter-Disciplinary Dual Degree",
    }

    const programOptions = Object.entries(PROGRAM).map(([key, value]) => (
        <option key={value} value={key}>
            {value}
        </option>
    ));




    const { profileData, loading, error, handleChange, updateProfileData, setProfileData, url, setUrl } = useProfile();


    const handleSubmit = async (e) => {
        e.preventDefault();
        updateProfileData();
    };

    const handleImageEdit = () => {
        document.getElementById('image').click();
    };


    const handleFileChange = async (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = async () => {
                if (file.type === 'image/heic') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid File',
                        text: 'Only JPG, JPEG, PNG, or WEBP files are allowed.',
                        customClass: {
                            container: 'my-swal-container',
                            title: 'my-swal-title',
                            text: 'my-swal-text',
                        },
                    }).then(result => {
                        window.location.reload();
                    });
                    return;
                }

                let imageData = reader.result;
                const image = new Image();
                image.src = imageData;

                image.onload = () => {
                    const canvas = document.createElement('canvas');
                    const maxWidth = 800;
                    const maxHeight = 800;
                    let width = image.width;
                    let height = image.height;

                    if (width > height) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const context = canvas.getContext('2d');
                    context.drawImage(image, 0, 0, width, height);

                    canvas.toBlob(
                        async compressedBlob => {
                            // Convert to JPEG format
                            const jpegBlob = await new Promise(resolve => {
                                canvas.toBlob(
                                    blob => {
                                        resolve(blob);
                                    },
                                    'image/jpeg',
                                    0.8,
                                );
                            });

                            const compressedFile = new File([jpegBlob], file.name, {
                                type: 'image/jpeg',
                                lastModified: Date.now(),
                            });

                            const url = URL.createObjectURL(compressedFile); // Create a valid URL
                            setUrl(url);
                            setProfileData({ ...profileData, profile_pic: compressedFile });
                        },
                        'image/jpeg',
                        0.6, // Compression quality (0.6 represents 60% quality)
                    );
                };
            };

            reader.readAsDataURL(file);
        }


        const currurl = URL.createObjectURL(file);

        setUrl(currurl);
    };

    const [edit, setEdit] = useState(false);

    const userData = JSON.parse(localStorage.getItem('userData'))

    console.log("here is the user data")

    return (
        <div style={styles.mainContainer}>
            <div className="profileform-area" style={styles.profileformArea}>
                <div className="heading-container" style={styles.headingContainer}>
                    {userData.is_alum ? "Alum Profile" : "User Profile"}
                    <div style={{ backgroundColor: "black" }} onMouseEnter={() => setEdit(true)} onMouseLeave={() => setEdit(false)} onClick={handleImageEdit} className={`user-profile ${edit && "editing"}`}>
                        {url && <img style={{ backgroundColor: "black", borderWidth: "0" }} src={url} className="profile-picture" alt="profile pic" />}
                        {edit && <div style={{ position: "absolute", color: "black", backgroundColor: "rgba(255,255,255,0.6)", padding: "5px", borderRadius: "5px" }}>Edit</div>}
                    </div>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={event => handleFileChange(event)}
                        style={{ display: "none" }}
                    ></input>
                </div>

                <div className="profileform-container" style={styles.formContainer}>
                    {!userData.is_alum && <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="rollno" style={styles.profilelabel}>Roll Number</label>
                        <input
                            id="rollno"
                            name="rollno"
                            type="text"
                            value={profileData.rollno}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>}
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
                        <label htmlFor="department" style={styles.profilelabel}>Department</label>
                        <select value={profileData.department} onChange={handleChange} style={styles.input} name="department" id="department" required>
                            <option value="" defaultChecked>Select Department</option>
                            {departmentOptions}
                        </select>
                    </div>

                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="degree" style={styles.profilelabel}>Degree</label>
                        <select value={profileData.degree} onChange={handleChange} style={styles.input} name="degree" id="degree" required>
                            <option value="" defaultChecked>Select Degree</option>
                            {degreeOptions}
                        </select>
                    </div>


                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label htmlFor="program" style={styles.profilelabel}>Program</label>
                        <select value={profileData.program} onChange={handleChange} style={styles.input} name="program" id="program" required>
                            <option value="" defaultChecked>Select Program</option>
                            {programOptions}
                        </select>
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
                        <select value={profileData.gender} onChange={handleChange} style={styles.input} name="gender" id="gender" required>
                            <option value="" defaultChecked>Select Gender</option>
                            {genderOptions}
                        </select>
                    </div>

                    {!userData.is_alum && <div className="pinfo-constituents" style={styles.constituents}>
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
                    </div>}


                </div>

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