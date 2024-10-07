import React from 'react'
import AlumniCard from './AlumniCard'

const alumniList = [  
  {
    name: "Jane Smith",
    designation: "Product Manager at ABC",
    imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=2560&auto=format&fit=crop&q=80",
  },
  {
    name: "John Doe",
    designation: "Software Engineer at XYZ",
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mike Johnson",
    designation: "Data Scientist at DEF",
    imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=2560&auto=format&fit=crop&q=80",
  },
  {
    name: "John Doe",
    designation: "Software Engineer at XYZ",
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager at ABC",
    imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=2560&auto=format&fit=crop&q=80",
  },
  {
    name: "John Doe",
    designation: "Software Engineer at XYZ",
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Alumni3 = () => {
  return (
    <>
        <h1
          style={{ color: '#700815' }}
          className="text-5xl font-bold text-center"
        >
          Esteemed Alumni
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