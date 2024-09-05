import React from "react";
import "./images.css"
import { FaInstagram } from "react-icons/fa";

export const Images = () =>{
    return (
        <div className="info">
            <h1>Classic Drip</h1>
            <h3>Get Your Drip on</h3>

            <div id="images">
                <div id="hairline">
                    <hr/>
                </div>

                <h2>Products</h2>
                {/* <h4>We sell a variety of drip, including shirts, shorts...</h4> */}

                <div id="side">
                    <img src="/img/p5.jpg" alt="Shorts 1" />
                    <img src="/img/p7.jpg" alt="Shirt 1" />
                    <img src="/img/p3.jpg" alt="Shirt 2" />
                    <img src="/img/p2.jpg" alt="Shirt 4" />
                </div>
            </div>

            <div id="aboutus_cont">
                <h2>Our Story</h2>
                <div id="aboutus">
                    <img src="/img/classic_tape-01.webp" alt="Our Story" />

                    <div id="letter">
                        <h3>From The First Drip</h3>
                        <p>From the beginning <i>Classic Drip</i> has been always upholding our belief in how clothing can bring communities together.
                        It is our hope that every drop of blood sweat and tear contributes to the <i>Drip</i>. <br/>Every one of our design comes from the
                        creative powers of collaborating with meaningful minds. </p>
                        
                        <p>If you want to stay classy then we are the <i>Drip</i> you are looking for</p>
                        <a href='https://shopclassicdrip.com/' target="_blank" rel="noopener noreferrer"><button>Shop</button></a>
                    </div>
                </div>
            </div>

            <div id="collab_cont">
                <div className="overlay">
                    <img src="/img/teddy bear.PNG" alt="Classic Drip Teddy" className="teddy"/>
                    <h2>Collab With Us</h2>
                    <h3>Follow us and tag us on a picture</h3>
                        <a href='https://www.instagram.com/classicdripllc/' target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="insta"/>
                    </a>
                </div>
            
                <div id="collab">
                    <img  src="/img/collab1.jpg" alt="Collab 1"/>
                    <img  src="/img/collab2.jpg" alt="Collab 2"/>
                    <img  src="/img/collab3.jpg" alt="Collab 3"/>
                </div>
            </div>

            <footer>
                <div className="foot-text">
                    <p>&copy; 2024 Your Classic Drip. All rights reserved.
                    Developed by <a href="https://renans.netlify.app/" target="_blank" rel="noopener noreferrer">Renan Mougenot</a></p>
                </div>
            </footer>
        </div>
    )
}