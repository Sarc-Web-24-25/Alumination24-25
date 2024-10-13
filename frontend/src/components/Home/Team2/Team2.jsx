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
import adityaAryan from '../photos24/photoshoot/aditya_aryan.jpeg'
import akshitaChoudhary from '../photos24/photoshoot/akshita_choudhary.jpg'
import arnavMishra from '../photos24/photoshoot/arnav_mishra.JPG'
import ashwaniDubey from '../photos24/photoshoot/ashwani_dubey.jpg'
import adityaSingh from '../photos24/photoshoot/aditya_singh.jpg'
import nishitMoonat from '../photos24/photoshoot/nishit_moonat.jpg'
import karthikVaishnav from '../photos24/photoshoot/karthik_vaishnav.jpg'
import himanyaGarg from '../photos24/photoshoot/himanya_garg.jpg'
import bhaktiJoshi from '../photos24/photoshoot/bhakti_joshi.jpg'
import anshikaMishra from '../photos24/photoshoot/anshika_mishra.jpg'
import rutuja from '../photos24/photoshoot/rutuja.jpg'
import aniruddhaGoyal from '../photos24/photoshoot/aniruddha_goyal.jpg'
import ishaanGrover from '../photos24/photoshoot/ishan_grover.jpg'
import jinisha from '../photos24/photoshoot/jinisha.png'
import ananyaPatil from '../photos24/photoshoot/ananya_patil.png'

const Team2 = () => {
    const [currentMembers, setCurrentMembers] = useState([ {
        image: aniruddhaGoyal,
        header: "Aniruddh Goyal",
        linkedInUrl: "https://www.linkedin.com/in/aniruddhgoyal/?originalSubdomain=in",
        instagramUrl: "https://www.instagram.com/anniboii/",
    }]);
    
    const portfolios = {
        oc: [
            {
                image: aniruddhaGoyal,
                header: "Aniruddh Goyal",
                linkedInUrl: "https://www.linkedin.com/in/aniruddhgoyal/?originalSubdomain=in",
                instagramUrl: "https://www.instagram.com/anniboii/",
            },
        ],
        asmp: [

            {
                image: anshikaMishra,
                header: "Anshika Mishra",
                linkedInUrl: "https://www.linkedin.com/in/anshika-mishra-952715267",
                instagramUrl: "https://www.instagram.com/anshika.mishra?igsh=aW1zMmtobjNoaXU4",
            },
            {
                image: nishitMoonat,
                header: "Nishit Moonat",
                linkedInUrl: "https://www.linkedin.com/in/nishit-moonat-416187250",
                instagramUrl: "https://www.instagram.com/nishitt27?igsh=MWJlajJmMnlhcW1kdA==",
            },
        ],
        hda: [
            {
                image: bhaktiJoshi,
                header: "Bhakti Joshi",
                linkedInUrl: "https://www.linkedin.com/in/bhakti-joshi-33b1b7252/",
                instagramUrl: "https://www.instagram.com/bhaktijoshi_14",
            },
            {
                image: ishaanGrover,
                header: "Ishaan Grover",
                linkedInUrl: "https://www.linkedin.com/in/ishan-grover-30b499256/",
                instagramUrl: "https://www.instagram.com/ishan__grover/",
            },
        ],
        events: [
            {
                // image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                image: arnavMishra,
                header: "Arnav Mishra",
                linkedInUrl: "https://www.linkedin.com/in/arnav-mishra-b1000924b/",
                instagramUrl: "https://www.instagram.com/arnavm7203?igsh=MTJwNGJsejFxenRvZQ==",
            },
            {
                image: adityaSingh,
                header: "Aditya Singh",
                linkedInUrl: "https://www.linkedin.com/in/aditya-singh-4b2052201/",
                instagramUrl: "https://www.instagram.com/_adityasingh96/",
            },
        ],
        marketing: [
            {
                image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                header: "Hemendra Suthar",
                linkedInUrl: "https://www.linkedin.com/in/hemendrasuthar/",
                instagramUrl: "https://www.instagram.com/hemendra._.s/",
            },
            {
                // image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                image: adityaAryan,
                header: "Aditya Aryan",
                linkedInUrl: "https://www.linkedin.com/in/aditya-aryan-3aba9b250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                instagramUrl: "https://www.instagram.com/adi__aaryan?igsh=MWtqNTU1MDJ0MmY3Yw==",
            },
        ],
        operations: [
            {
                // image: "https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=",
                image: karthikVaishnav,
                header: "Kartik Vaishnav",
                linkedInUrl: "https://www.linkedin.com/in/kartik-vaishnav-12a758251",
                instagramUrl: "https://www.instagram.com/kartik__vaishnav?igsh=MXU0cGE3cTUzbGVsYw==",
            },
            {
                image: himanyaGarg,
                header: "Himanya Garg",
                linkedInUrl: "https://www.linkedin.com/in/himanya-garg-75230a256/",
                instagramUrl: "https://instagram.com/himanya_garg30?igshid=ZDc4ODBmNjlmNQ==",
            },
        ],
        mpr: [
            {
                image: ananyaPatil,
                header: "Ananya Patil",
                linkedInUrl: "https://www.linkedin.com/in/ananya-patil-a18437281/",
                instagramUrl: "https://www.instagram.com/ananyapatil._/",
            },
            {
                image: rutuja,
                header: "Rutuja Khandekar",
                linkedInUrl: "https://www.linkedin.com/in/rutuja-khandekar-42971b248/",
                instagramUrl: "https://www.instagram.com/___.rutujaaa.__/",
            },
        ],
        design: [
            {
                image: jinisha,
                header: "Jinisha Sabara",
                linkedInUrl: "https://www.linkedin.com/in/jinisha-sabadra-37949a263",
                instagramUrl: "https://www.instagram.com/jinisha_2784?igsh=eTR2YjJveDRvM29p",
            },
            {
                // image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                image: akshitaChoudhary,
                header: "Akshita Choudhary",
                linkedInUrl: "https://www.linkedin.com/in/akshita-choudhary-851319253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                instagramUrl: "https://www.instagram.com/akshita_choudhary1905?igsh=MWg2dXJzcm1yOGR4Yw==",
            },
        ],
        web: [
            {
                // image: "https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=",
                image: ashwaniDubey,
                header: "Ashwani Dubey",
                linkedInUrl: "https://www.linkedin.com/in/ashwani-dubey-3b2a81258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                instagramUrl: "https://www.instagram.com/kanhahihu?igsh=MW5xeHZoNW1vbmZlaw==",
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
                        {/* {currentMembers && currentMembers.map((member, index) => (
                            // console.log("current member:", currentMembers),
                            <TeamCard
                                key={index}
                                people={member}
                                // header={member.header}
                                // linkedInUrl={member.linkedInUrl}
                                // instagramUrl={member.instagramUrl}
                            />
                        ))} */}
                        <TeamCard people={currentMembers} />
                    </div>

                    <Team3 handleThumbnailClick={handleThumbnailClick} />
                </div>
            </div>
        </>
    );
};

export default Team2;