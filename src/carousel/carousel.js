import React from "react";
import { useState, useEffect } from 'react';

const img = [
    '/img/famous1.jpg','/img/papi flaco.jpg',
    'img/QRose.jpg','img/Skater1.jpg',
    'img/swims.jpg'
]

const description = [
    'Guy 1', 'Papi Flaco',
    'Quinton Rose','Skater 1',
    'Teddy Swims'
]

const description2 = [
    'Guy 1 description', 'Musical Artist',
    'Basketball Player for Rip City Remix','Skater 1',
    'Pop Star Artist'
]

const instagram = [
    'https://www.instagram.com/guy1/', 'https://www.instagram.com/truepapiflaco/',
    'https://www.instagram.com/qrose3/', 'https://www.instagram.com/guy1/',
    'https://www.instagram.com/teddyswims/'
]

export const Carousel = () => {

    const [idx, setIndex] = useState('');
    const delay = 3000;

    // useEffect(() =>{
    //     const intervalId = setInterval(() => {
    //         setIndex((prevIndex) => 
    //             prevIndex === img.length - 1 ? 0 : prevIndex + 1
    //         );
    //     }, delay)

    //     return () => clearInterval(intervalId);
    // }, [])

    return (
        
        <div className="carousel">
      {/* <img
        src='/img/papi flaco.jpg'
        alt={`Slide ${idx + 1}`}
        className="carousel-image"
      /> */}

      <img src='/img/swims.jpg'/>

      {/* <div className="carousel-dots">
        {img.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === index ? 'active' : ''}`}
            onClick={() => setIndex(index)} // Click to jump to slide
          ></span>
        ))}
      </div> */}
    </div>
  );
};
