import React from "react";
import { useState, useEffect } from 'react';
import "./carousel.css";

const img = [
    '/img/famous/famous1.jpg','/img/famous/papiflaco.jpg',
    '/img/famous/QRose.jpg','/img/famous/Skater1.jpg',
    '/img/famous/teddy2.jpg'
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

    // const [idx, setIndex] = useState('');
    // const delay = 6000;

    // useEffect(() =>{
    //     const intervalId = setInterval(() => {
    //         setIndex((prevIndex) => 
    //             prevIndex === img.length - 1 ? 0 : prevIndex + 1
    //         );
    //     }, delay)

    //     return () => clearInterval(intervalId);
    // }, [])

    // return (
    //     <div class="holster">
    //     <div class="container x mandatory-scroll-snapping" dir="ltr">
    //         {img.map((src, index) => (
    //             <img key={index} src={src} alt={`Image ${index + 1}`} className="snap-image" />
    //         ))}
    //         {description.map((des, index) => (
    //             <p>{des}</p>
    //         ))}
    //         {description2.map((des2, index) => (
    //              <p>{des2}</p>
    //         ))}
    //         {instagram.map((insta, index) => (
    //             <a href={insta}>Instagram</a>
    //         ))}
    //     </div>
    //     </div>
    // );
  };
