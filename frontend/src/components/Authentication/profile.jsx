import React, { useEffect, useState } from 'react';
import '../Authentication/profile.css';
import backgroundImage from '../Authentication/bglogin.png';
import useProfile from '../../hooks/useProfile';
import Swal from 'sweetalert2';
import letter from '../Home/bgimg/letter.png'

const styles = {
    mainContainer: {
        backgroundImage: `url(${backgroundImage})`,
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: '0',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        overflow: 'scroll',
        alignItems: 'center',
        paddingTop: '0vh',
        top: '0',
    },

    profileformArea: {
        color: 'white',
        fontFamily: 'Japan Daisuki',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '20px',
    },

    user: {
        display: 'flex',
        fontSize: '65px',
        flexWrap: 'wrap',
        // Important: media queries for font size adjustments
        // '@media (max-width: 768px)': {
        //     fontSize: '45px !important',
        // },
        // '@media (max-width: 480px)': {
        //     fontSize: '20px !important',
        // },
    },

    headingContainer: {
        top: '0',
        display: 'flex',
        alignItems: 'center',
        fontSize: '32px',
        gap: '3rem',
        marginTop: '20vh',
        marginLeft: '10vw'
        // Important: media queries for font size and gap adjustments
        // '@media (max-width: 768px)': {
        //     fontSize: '24px !important',
        //     gap: '1.5rem !important',
        // },
    },

    formContainer: {
        width: '90%',
        fontFamily: 'Hahmlet',
        maxWidth: '1200px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0rem',
        justifyContent: 'space-between',
        borderRadius: '18px',
    },

    constituents: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '50%',
        flexBasis: '40%',
        marginBottom: '20px',
        // Important: media query to adjust width for smaller screens
        // '@media (max-width: 768px)': {
        //     width: '100% !important',
        //      flexDirection: 'column !important',
        //     flexBasis: '100% !important',
        // },
    },

    one: {
        width:"50%",
        display: 'flex',
        flexDirection: 'row',
        gap: '4rem',
        alignItems: 'flex-end',
        flexBasis: '40%',
        paddingRight: '1rem',
        marginBottom: '20px',
        // Important: media query to change layout for smaller screens
        // '@media (max-width: 768px)': {
        //     flexDirection: 'column !important',
        //     gap: '1rem !important',
        //     flexBasis: '100% !important',
        // },
    },

    two: {
        width:'50%',
        right:'0',
        display: 'flex',
        flexDirection: 'row',
        gap: '4rem',
        alignItems: 'flex-end',
        flexBasis: '40%',
        paddingRight: '1rem',
        marginBottom: '20px',
        marginLeft: 'auto',
        // Important: media query to change layout for smaller screens
        // '@media (max-width: 768px)': {
        //     flexDirection: 'column !important',
        //     gap: '1rem !important',
        //     flexBasis: '100% !important',
        // },
    },

    constituents1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '50%',
        flexBasis: '40%',
        marginBottom: '20px',
        // Important: media query to adjust width for smaller screens
        // '@media (max-width: 768px)': {
        //     width: '100% !important',
        //      flexDirection: 'column !important',
        //     flexBasis: '100% !important',
        // },
    },

    constituents2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '50%',
        flexBasis: '40%',
        marginBottom: '20px',
        // Important: media query to adjust width for smaller screens
    //     '@media (max-width: 768px)': {
    //         width: '100% !important',
    //          flexDirection: 'column !important',
    //         flexBasis: '100% !important',
    //     },
    },

    profilelabel: {
        fontSize: '32px',
        fontWeight: '600',
        marginBottom: '5px',
        color: "#fff",
        // Important: media query to reduce font size on smaller screens
        // '@media (max-width: 768px)': {
        //     fontSize: '24px !important',
        // },
    },

    input: {
        width: '100%',
        border: '1px solid rgba(255, 175, 175, 1)',
        borderRadius: '18px',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: "rgba(255, 175, 175, 1)",
        color: "#000",
        outline: 'none',
        transition: 'border-color 0.3s',
        // Important: media query to adjust input2 font size for smaller screens
        // '@media (max-width: 768px)': {
        //     fontSize: '14px !important',
        //      flexDirection: 'column !important'
        // },
    },

    input2: {
        width: '100%',
        border: '1px solid rgba(255, 175, 175, 1)',
        borderRadius: '18px',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: "rgba(255, 175, 175, 1)",
        color: "#000",
        outline: 'none',
        transition: 'border-color 0.3s',
        // // Important: media query to adjust input2 font size for smaller screens
        // '@media (max-width: 768px)': {
        //     fontSize: '14px !important',
        //      flexDirection: 'column !important'
        // },
    },

    textarea: {
        width: '100%',
        border: '1px solid rgba(255, 175, 175, 1)',
        padding: '10px',
        borderRadius: '18px',
        backgroundColor: "rgba(255, 175, 175, 1)",
        height: '150px',
        fontSize: '28px',
        color: "#000",
        outline: 'none',
        // Important: media query for textarea font size
    //     '@media (max-width: 768px)': {
    //         fontSize: '18px !important',
    //     },
    },

    submitButton: {
        // left:0,
        marginTop: '-20vh',
        // marginBottom: '12vh',
        marginLeft:'-50vh',
        // width: '2vw',
        // height: '10vh',
        flexBasis: '60%',
        padding: '10px',
        backgroundColor: "rgba(255, 175, 175, 0.5)",
        border: 'none',
        borderRadius: '50px',
        color: 'black',
        fontSize: '28px',
        cursor: 'pointer',
        transition: 'background-color 1s',
        marginBottom:'2vh',
        // Important: media queries for button width and font size adjustments
        // '@media (max-width: 768px)': {
        //     width: '4vw !important',
        //     fontSize: '24px !important',
        // },
        // '@media (max-width: 480px)': {
        //     width: '6vw !important',
        //     fontSize: '18px !important',
        // },
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
        "Center for Machine Intelligence and Data Science": "CMIDS",
        "Centre for Urban Science and Engineering": "CUSE",
        "Centre of Studies in Resources Engineering": "CSRE",
        "Center for Liberal Education":"LASE",
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

    const programOptions = Object.keys(PROGRAM)
    .filter(key => key !== 'program') // Exclude the 'program' key
    .map(key => (
        <option key={key} value={key}>{PROGRAM[key]}</option>
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
                        iconColor: 'brown',
                        confirmButtonColor: 'brown',
                        background: `url(${letter})`,
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
        <div className='mainContainer' style={styles.mainContainer}>
            <div className="profileform-area" style={styles.profileformArea}>
            <div className="heading-container" style={styles.headingContainer}>
                    
                    <div style={{ backgroundColor: "black" }} onMouseEnter={() => setEdit(true)} onMouseLeave={() => setEdit(false)} onClick={handleImageEdit} className={`user-profile ${edit && "editing"}`}>
                        {url && <img style={{ backgroundColor: "black", borderWidth: "0" }} src={'https://alumination.sarc-iitb.org' + url} className="profile-picture" alt="profile pic" />}
                        {edit && <div style={{ position: "absolute", backgroundColor: "rgba(255,255,255,0.6)", padding: "5px", borderRadius: "5px" }}>Edit</div>}
                    </div>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={event => handleFileChange(event)}
                        style={{ display: "none" }}
                    ></input>
                    <div className="user" style={styles.user}>
                    {userData.is_alum ? "Alum Profile" : "User Profile"}
                    </div>
                </div>
</div>




                <div className="profileform-container" style={styles.formContainer}>
                    
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label className="label" htmlFor="fullname" style={styles.profilelabel}>Full Name</label>
                        <input
                            placeholder='Full Name'
                            id="fullname"
                            name="fullname"
                            type="text"
                            value={profileData.fullname}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                    {!userData.is_alum && <div className="pinfo-constituents" style={styles.constituents}>
                        <label className="label" htmlFor="hostel" style={styles.profilelabel}>Hostel</label>
                        <input
                            placeholder='Hostel'
                            id="hostel"
                            name="hostel"
                            type="text"
                            value={profileData.hostel}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>}
                    {!userData.is_alum && <div className="pinfo-constituents" style={styles.constituents}>
                        <label className="label"htmlFor="rollno" style={styles.profilelabel}>Roll Number</label>
                        <input
                            placeholder='Roll Number'
                            id="rollno"
                            name="rollno"
                            type="text"
                            value={profileData.rollno}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>}
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label className="label"htmlFor="phoneno" style={styles.profilelabel}>Phone no:</label>
                        <input
                            placeholder='Phone no'
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
                        <label className="label" htmlFor="email" style={styles.profilelabel}>Email</label>
                        <input
                            placeholder='Email'
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
                        <label className="label" htmlFor="program" style={styles.profilelabel}>Program</label>
                        <select value={profileData.program} onChange={handleChange} style={styles.input} name="program" id="program" required>
                            <option value="" defaultChecked>Select Program</option>
                            {programOptions}
                        </select>
                    </div>
                    
                    
                    
                    
                    <div className="pinfo-constituents" style={styles.constituents}>
                        <label className="label"  htmlFor="personal_email" style={styles.profilelabel}>Personal Email:</label>
                        <input
                            placeholder='Personal Email'
                            id="personal_email"
                            name="personal_email"
                            type="email"
                            value={profileData.personal_email}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div className="one" style={styles.one}>
                    <div className="pinfo-constituents" style={styles.constituents2}>
                        <label className="label"  htmlFor="department" style={styles.profilelabel}>Department</label>
                        <select value={profileData.department} onChange={handleChange} style={styles.input2} name="department" id="department" required>
                            <option value="" defaultChecked>Select Department</option>
                            {departmentOptions}
                        </select>
                    </div>
                    <div className="pinfo-constituents" style={styles.constituents2}>
                        <label className="label" htmlFor="degree" style={styles.profilelabel}>Degree</label>
                        <select value={profileData.degree} onChange={handleChange} style={styles.input2} name="degree" id="degree" required>
                            <option value="" defaultChecked>Select Degree</option>
                            {degreeOptions}
                        </select>
                    </div>

                    </div>
                    
                    <div className="two" style={styles.two}>
                    <div className="pinfo-constituents" style={styles.constituents2}>
                        <label className="label" htmlFor="graduation_year" style={styles.profilelabel}>Graduation</label>
                        <input
                            placeholder='Graduation Year'
                            id="graduation_year"
                            name="graduation_year"
                            type="number"
                            value={profileData.graduation_year}
                            onChange={handleChange}
                            style={styles.input2}
                            required
                        />
                    </div>

                    <div className="pinfo-constituents" style={styles.constituents2}>
                        <label className="label"  htmlFor="gender" style={styles.profilelabel}>Gender:</label>
                        <select value={profileData.gender} onChange={handleChange} style={styles.input2} name="gender" id="gender" required>
                            <option value="" defaultChecked>Select Gender</option>
                            {genderOptions}
                        </select>
                    </div>
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