import React from 'react'
import AlumniCard from './AlumniCard'
import japanDaisukiFont from '../../../assets/fonts/JapanDaisuki-8OeaZ.woff' 
import Nandan_Nilekani from '../photos24/Nandan_Nilekani.png'
import Nitesh_Tiwari from '../photos24/Nitesh_Tiwari.png'
import Bhavish_Aggarwal from '../photos24/Bhavish_Aggarwal.png'
import Bharat_Desai from '../photos24/Bharat_Desai.png'
import Lalit_Keshare from '../photos24/Lalit_Keshare.png'
import Zishaan_Hayath from '../photos24/Zishaan_Hayath.jpg'
import Ankit_Mehta from '../photos24/Ankit_Mehta.jpg'
import Gaganjeet_Singh from '../photos24/Gaganjeet_Singh.jpeg'
import Sameer_Saxena from '../photos24/Sameer_Saxena.jpg'

const alumniList = [  
  {
    name: "Nandan_Nilekani",
    designation: "Cofounder Infosys",
    imageSrc: Nandan_Nilekani,
  },
  {
    name: "Nitesh Tiwari",
    designation: "CEO Groww",
    imageSrc: Nitesh_Tiwari,
  },
  {
    name: "Bhavish Aggarwal",
    designation: "Data Scientist at DEF",
    imageSrc: Bhavish_Aggarwal,
  },
  {
    name: "Bharat Desai",
    designation: "Chairman, Syntel",
    imageSrc: Bharat_Desai,
  },
  {
    name: "Lalit Keshare",
    designation: "CEO Groww",
    imageSrc: Lalit_Keshare,
  },
  {
    name: "Zishaan Hayath",
    designation: "toppr CEO",
    imageSrc: Zishaan_Hayath,
  },
  {
    name: "Ankit Mehta",
    designation: "CEO Ideaforge",
    imageSrc: Ankit_Mehta,
  },
  {
    name: "Gaganjeet Singh",
    designation: "Writer and Director",
    imageSrc: Gaganjeet_Singh,
  },
  {
    name: "Sameer Saxena",
    designation: "Director",
    imageSrc: Sameer_Saxena,
  },
  
];

const styles = {
  '@font-face': {
    fontFamily: 'Japan Daisuki Regular',
    src: `url(${japanDaisukiFont}) format('woff')`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },

  heading: {
    fontFamily: 'Japan Daisuki Regular, sans-serif',
    color: 'white',
    WebkitTextStroke: '1px #700815',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
    fontSize: "5rem",
    fontWeight: "700",
    textAlign: "center",
  }
};

const Alumni3 = () => {
  
  return (
    <>
        <h1
          style={styles.heading}
          // className="text-5xl font-bold text-center"
        >
          Past Speakers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 p-6 mx-50">
        {alumniList.map((alumni, index) => (
            <AlumniCard
              key={index}
              name={alumni.name}
              designation={alumni.designation}
              imageSrc={alumni.imageSrc}
            />
        ))}
        </div>
    </>
  )
}

export default Alumni3