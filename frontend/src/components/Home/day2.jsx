import HorizontalScroll from "react-scroll-horizontal";
import i1 from "./bgimg/i1.png";
import i2 from "./bgimg/i2.png";
import i3 from "./bgimg/i3.png";
import i4 from "./bgimg/i4.png";
import i5 from "./bgimg/i5.png";
import i6 from "./bgimg/i6.png";
import f1 from "./bgimg/final.png";
import god from "./bgimg/god.png";
import logo from "./bgimg/logo.png";
import ig1 from "./bgimg/ig1.png";
import women from "./bgimg/women.png";
import clock from "./bgimg/clock.png";
import '../Home/all.css';
import f2 from "./bgimg/backg.png";
import f3 from "./bgimg/backh.png";


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
            margin: '0vh 0vw !important',
        }
    },

    profileformArea: {
        //   backgroundColor: '#000',
        backgroundImage: `url(${f2})`,

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
        backgroundColor: "rgb(10 62 109 / 0%)",
        border: 'none',
        alignItems: 'center',
        borderRadius: '50px',
        marginRight: '10px',
        marginTop: '200px',
        color: '#FFD1AB',
        fontSize: '16px',
    },
};


export default function Home() {
    const containerStyle = {
        // Adjust width as needed
        height: "94.1vh",
    };

    const childStyle = {
        // Adjust the child element width as needed
        height: "100vh",
        margin: "0px",
        backgroundImage: `url(${f2})`,
        // backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // backgroundImage: `url(${f3})`,


    };
    const myStyle = {
        opacity: '1',
        backgroundImage: `url(${f3})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // Center the background image
        // backgroundSize: 'cover', 

        // transform: 'rotate(-90.2deg)',

    };
    const imgstyle = {
        height: "700px",
        margin: "0px",

    };
    const textstyle = {
        color: "#FFE500",
        fontSize: "70px",
    };
    const textstyle1 = {
        color: "#FFD6A0",
        fontSize: "35px",
    };
    const bgstyle = {
        // Adjust the child element width as needed
        backgroundImage: `url(${f1})`,
        height: "100vh",
        width: "2000vh",
        backgroundPosition: 'center',
        margin: "0px",
        display: 'flex',

        alignItems: 'center',
        //  justifyContent: 'space-evenly',


    };
    const aboutus = {
        width: "150vh",
        height: "50vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    };

    return (
        <div style={containerStyle}>
            {/* <HorizontalScroll> */}

            <div style={childStyle}>
                <div style={myStyle}>


                    <div className="heading-container" style={styles.headingContainer}>

                        <div className="mj" > DAY 1</div>
                        <div className="mn">

                            <div className="mk" style={{ whiteSpace: 'pre' }}>
                                {"02:30-05:00            Shadow Program      BSE"}

                            </div>
                            <div className="mk" style={{ whiteSpace: 'pre' }}>
                                {"02:30-05:00        Shadow Program      BSE"}

                            </div>
                            <div className="mk" style={{ whiteSpace: 'pre' }}>
                                {"02:30-05:00        Shadow Program      BSE"}

                            </div>
                            <div className="mk" style={{ whiteSpace: 'pre' }}>
                                {"02:30-05:00        Shadow Program      BSE"}

                            </div>
                        </div>



                        <div className=" mo">


                            <button className=" mi" type="submit" style={styles.submitButton}>

                                {"<<"}- DAY 2




                            </button>
                            <button className=" mi" type="submit" style={styles.submitButton}>



                            </button>
                        </div>

                    </div>


                </div>



            </div>

            {/* </HorizontalScroll> */}
        </div>
    )
}