import React from 'react'
import AlumniCard from './AlumniCard'
import japanDaisukiFont from '../../../assets/fonts/JapanDaisuki-8OeaZ.woff' 
import Nandan_Nilekani from '../photos24/Nandan_Nilekani.png'
import Bhavish_Aggarwal from '../photos24/Bhavish_Aggarwal.png'
import Nitesh_Tiwari from '../photos24/Nitesh_Tiwari.png'
import Sameer_Saxena from '../photos24/Sameer_Saxena.jpg'
import Gaganjeet_Singh from '../photos24/Gaganjeet_Singh.jpeg'
import Ashima_Mittal from '../photos24/Ashima_Mittal.jpeg'
import Vipul_Goyal from '../photos24/Vipul_Goyal.jpg'
import Shubham_Kumar from '../photos24/Shubham_Kumar.jpeg'
import Ahana_Gautam from '../photos24/Ahana_Gautam.jpeg'

const alumniList = [  
  {
    name: "Nandan_Nilekani",
    designation: "Co-Founder Infosys",
    imageSrc: Nandan_Nilekani,
  },
  {
    name: "Bhavish Aggarwal",
    designation: "CEO Ola Cabs",
    imageSrc: Bhavish_Aggarwal,
  },
  {
    name: "Nitesh Tiwari",
    designation: "Film Director",
    imageSrc: Nitesh_Tiwari,
  },
  {
    name: "Sameer Saxena",
    designation: "Film Director",
    imageSrc: Sameer_Saxena,
  },
  {
    name: "Ashima Mittal",
    designation: "Indian Administrative Services ‘18",
    imageSrc: Ashima_Mittal,
  },
  {
    name: "Vipul Goyal",
    designation: "Stand-up Comedian and Actor",
    imageSrc: Vipul_Goyal,
  },
  {
    name: "Shubham Kumar",
    designation: "AIR 1 UPSC CSE 2020",
    imageSrc: Shubham_Kumar,
  },
  {
    name: "Ahana Gautam",
    designation: "Co-founder & CEO Open Secret",
    imageSrc: Ahana_Gautam,
  },
  {
    name: "Gaganjeet Singh",
    designation: "Writer and Director",
    imageSrc: Gaganjeet_Singh,
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