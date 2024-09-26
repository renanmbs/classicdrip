import React from "react";
import './carousel.css';
import 'primereact/resources/primereact.min.css';           
import 'primeicons/primeicons.css'; 
import { Carousel } from 'primereact/carousel';
import { FaInstagram } from "react-icons/fa";

const products = [
    { id: 1, name: 'Teddy Swims', image: '/img/famous/teddy2.jpg', description: 'Popstar Artist', insta: 'https://www.instagram.com/teddyswims/' },
    { id: 2, name: 'Duke Gomez', image: '/img/famous/famous1.jpg', description: 'Internet Personality', insta: 'https://www.instagram.com/dukegomez7/'},
    { id: 3, name: 'Papi Flaco', image: 'img/famous/papiflaco.jpg', description: 'Musical Artist', insta: 'https://www.instagram.com/truepapiflaco/'  },
    { id: 4, name: 'Quinton Rose', image: '/img/famous/QRose.jpg', description: 'Basketball Player', insta: 'https://www.instagram.com/qrose3/'  },
    { id: 5, name: 'Skater 1', image: '/img/famous/Skater1.jpg', description: 'Skateboarder', insta: 'https://www.instagram.com/guy/'  },
];

export const Carousels = () => {
    const productTemplate = (product) => {
        return (
            <div className="product-item">
                <img src={product.image} alt={product.name} />
                <div className="product-detail">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <a href={product.insta} target="_blank" rel="noopener noreferrer"><FaInstagram className='insta'/> </a>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Carousel 
                value={products} 
                itemTemplate={productTemplate} 
                numVisible={1} 
                numScroll={1}  
                circular        
                autoplayInterval={8000}
                contentClassName="carousel-container"
            />
        </div>
    );
};

