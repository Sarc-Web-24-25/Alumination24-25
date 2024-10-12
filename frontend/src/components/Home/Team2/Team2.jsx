// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap'
// import './Team2.css';
// import Team3 from '../Team3/Team3';
// import TeamCard from '../TeamCard/TeamCard';

// const Team2 = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
    
//     const items = [
//         { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 1' },
//         { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 2' },
//         { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 3' },
//         { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 4' },
//         { img: 'images/cactus.jpg', title: 'DESIGN SLIDER', description: 'Description 5' },
//         { img: 'images/house.jpg', title: 'DESIGN SLIDER', description: 'Description 6' },
//         { img: 'images/rock.jpg', title: 'DESIGN SLIDER', description: 'Description 7' },
//         { img: 'images/tree.jpg', title: 'DESIGN SLIDER', description: 'Description 8' },
//     ];

//     const handleThumbnailClick = (index) => {
//         document.querySelectorAll('.list .item').forEach((list, idx) => {
//             gsap.to(list, {
//                 zIndex: -1,
//             });
//         });
    
//         gsap.to(`#thumb${index}`, {
//             zIndex: 50,
//         });
//     };

//     return (
//         <>
//             <div className="teamCarouselContainer">
//                 <div className="carousel">
                    
//                     <div className="list">
//                         {items.map((item, index) => (
//                             <div
//                                 className='item'
//                                 id={`thumb${index}`}
//                                 key={index}
//                             >
//                                 <img src={item.img} alt={item.title} />
//                                 {/* <div className="content">
//                                     <div className="author">LUNDEV</div>
//                                     <div className="title">{item.title}</div>
//                                     <div className="topic">ANIMAL</div>
//                                     <div className="des">{item.description}</div>
//                                 </div> */}
//                             </div>
//                         ))}
//                     </div>

//                     {/* <div className="thumbnail">
//                         {items.map((item, index) => (
//                             <div
//                                 className='item'
//                                 key={index}
//                                 onClick={() => handleThumbnailClick(index)}
//                                 style={{ cursor: "pointer", zIndex: "100" }}
//                             >
//                                 <img src={item.img} alt={item.title} />
//                                 <div className="content">
//                                     <div className="title">Name Slider</div>
//                                     <div className="description">Description</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div> */}

//                     <Team3 handleThumbnailClick={handleThumbnailClick} />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Team2;












import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'
import './Team2.css';
import Team3 from '../Team3/Team3';
import TeamCard from '../TeamCard/TeamCard';

const Team2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentMembers, setCurrentMembers] = useState([]);
    
    const portfolios = {
        oc: [
            {
                image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                header: "Pranita Randive",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
            {
                image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                header: "Ashwani Dubey",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
        ],
        asmp: [
            {
                image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                header: "Pranita Randive",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
            {
                image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                header: "Ashwani Dubey",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
        ],
        hda: [
            {
                image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                header: "Pranita Randive",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
            {
                image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                header: "Ashwani Dubey",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
        ],
        events: [
            {
                image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                header: "Pranita Randive",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
            {
                image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                header: "Ashwani Dubey",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
        ],
        marketing: [
            {
                image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                header: "Pranita Randive",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
            {
                image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                header: "Ashwani Dubey",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
        ],
        operations: [
            {
                image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                header: "Pranita Randive",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
            {
                image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                header: "Ashwani Dubey",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
        ],
        mpr: [
            {
                image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                header: "Pranita Randive",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
            {
                image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                header: "Ashwani Dubey",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
        ],
        design: [
            {
                image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                header: "Pranita Randive",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
            {
                image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                header: "Ashwani Dubey",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
        ],
        web: [
            {
                image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                header: "Pranita Randive",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
            {
                image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                header: "Ashwani Dubey",
                linkedInUrl: "https://www.linkedin.com/in/example1",
                instagramUrl: "https://www.instagram.com/example1",
            },
        ],
    };

    const handleThumbnailClick = (index, portfolioKey) => {
        setCurrentMembers(portfolios[portfolioKey]);
        console.log(portfolios[portfolioKey]);
    };

    return (
        <>
            <div className="teamCarouselContainer">
                <div className="carousel">
                    
                    <div className="list">
                        {currentMembers && currentMembers.map((member, index) => (
                            <TeamCard
                                key={index}
                                header={member.header}
                                linkedInUrl={member.linkedInUrl}
                                instagramUrl={member.instagramUrl}
                            />
                        ))}
                    </div>

                    <Team3 handleThumbnailClick={handleThumbnailClick} />
                </div>
            </div>
        </>
    );
};

export default Team2;