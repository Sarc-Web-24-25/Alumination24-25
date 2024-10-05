import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './gallery2.css';
import image1 from './bgimg/AL2.jpg';
import image2 from './bgimg/AL3.jpg';
import image3 from './bgimg/AL5.jpg';
import image4 from './bgimg/AL6.jpg';
import image5 from './bgimg/AL7.jpg';
import image6 from './bgimg/AL9.jpg';
import image7 from './bgimg/AL10.jpg';
import image8 from './bgimg/AL15.jpg';
import image9 from './bgimg/AL16.jpg';
import image10 from './bgimg/AL20.jpg';
import image11 from './bgimg/AL21.jpg';
import image12 from './bgimg/AL22.jpg';
import image13 from './bgimg/AL23.jpg';
import image14 from './bgimg/AL24.jpg';
import image15 from './bgimg/AL15.jpg';
import image16 from './bgimg/AL30.jpeg';
import image17 from './bgimg/AL31.jpeg';
import image18 from './bgimg/AL32.jpeg';
import image19 from './bgimg/AL33.jpeg';
import image20 from './bgimg/AL34.jpeg';
function Gallery2(){
    let data=[
        {
            id:1,
            imgSrc:image1,
        },
        {
            id:2,
            imgSrc:image2,
        },
        {
            id:3,
            imgSrc:image3,
        },
        // {
        //     id:4,
        //     imgSrc:image4,
        // },
        {
            id:5,
            imgSrc:image5,
        },
        {
            id:6,
            imgSrc:image6,
        },
        {
            id:7,
            imgSrc:image7,
        },
        {
            id:8,
            imgSrc:image8,
        },
        {
            id:9,
            imgSrc:image9
        },
        {
            id:10,
            imgSrc:image10
        },
        {
            id:11,
            imgSrc:image11,
        },
        {
            id:12,
            imgSrc:image12,
        },
        {
            id:13,
            imgSrc:image13
        }
    ]
    const [model,setModel]= useState(false);
    const [tempingSrc,setTempingSrc]=useState('');
    const getImg=(imgSrc)=>{
        setTempingSrc(imgSrc);
        setModel(true);
    }
   return(
    <>
    <div className={model? "model open": "model"}>
        <img src={tempingSrc} />
        <CloseIcon onClick={()=> setModel(false)}/>
    </div>
    <div className='Gallery'>
       {data.map((item,index)=>{
        return(
            <div className='pics'  key={index} onClick={()=>getImg(item.imgSrc)}>
               <img src={item.imgSrc} style={{width:'100%'}} />
            </div>
        )
       })}
    </div>
    </>
   );
}
export default Gallery2;