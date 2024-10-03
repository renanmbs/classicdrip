import React from "react";
import "./images.css"
import { FaInstagram } from "react-icons/fa";
import { Carousels } from "../carousel/carousel";
import { useState } from "react";

export const Images = () =>{

    const [seeMore, setSeeMore] = useState('0');
    const [soon, setSoon] = useState('0');

    const handleClick = () =>{
        if(seeMore === '0'){
            setSeeMore('1');
        }
        else{
            setSeeMore('0');
        }
    }


    const handleClickSoon = () =>{
        if(soon === '0'){
            setSoon('1');
        }
        else{
            setSoon('0');
        }
    }


    return (
        <div className="info">
            <div className="info__container">
                <h1>Classic Drip</h1>
                <h3>Get Your Drip on</h3>

                <div id="images">
                    <div id="hairline">
                        <hr/>
                    </div>

                    <h2>Products</h2>
                    {/* <h4>We sell a variety of drip, including shirts, shorts...</h4> */}

                    <div id="side">
                        <button onClick={handleClickSoon} className="drop_soon"><img src="/img/products/shirt1.png" alt="Shirt 1" /></button>
                        <a href="https://shopclassicdrip.com/products/teddy-and-bear" target="_blank" rel="noopener noreferrer" ><button onClick={handleClickSoon} className="drop_soon"><img src="/img/products/shirt3.png" alt="Shirt 2" /></button></a>
                        <button onClick={handleClickSoon} className="drop_soon"><img src="/img/products/shirt7.png" alt="Shirt 3" /></button>
                        <a href="https://shopclassicdrip.com/products/classic-ape-purple" target="_blank" rel="noopener noreferrer" ><img src="/img/products/shirt2.png" alt="Shirt 4" /></a>
                        <a href="https://shopclassicdrip.com/products/drip-til-i-die" target="_blank" rel="noopener noreferrer"><img src="/img/products/shirt4.png" alt="Shirt 7" /></a>
                        <a href="https://shopclassicdrip.com/products/black-mesh-shorts" target="_blank" rel="noopener noreferrer"><img src="/img/products/short3.png" alt="Shorts 2" /></a>
                        
                        {
                            seeMore === '1' ? 
                            
                            <div className="seeMore">
                                 <img src="/img/products/shirt5.png" alt="Shirt 6" />
                                 <a href="https://shopclassicdrip.com/products/classic-ape-khaki-copy" target="_blank" rel="noopener noreferrer" ><img src="/img/products/shirt6.png" alt="Shirt 7" /></a>
                                 <a href="https://shopclassicdrip.com/products/deadly-drip" target="_blank" rel="noopener noreferrer" ><img src="/img/products/shirt8.png" alt="Shirt 8" /></a>
                                 <a href="https://shopclassicdrip.com/products/yellow-mesh-shorts" target="_blank" rel="noopener noreferrer" ><img src="/img/products/short1.png" alt="Shorts 1" /></a>
                                 <a href="https://shopclassicdrip.com/products/white-mesh-shorts" target="_blank" rel="noopener noreferrer" ><img src="/img/products/short4.png" alt="Shorts 2" /></a>
                            </div>

                            :

                            null
                        }
            
                    </div>

                    <div>
                            <button onClick={handleClick} className="see_but">{seeMore === '0' ? 'See More Drip' : 'See Less Drip' }</button>
                    </div>
                    
                </div>
            </div>

            <div id="trend">
                <div id="tr_cont">
                    <h2>Follow The Trend</h2>
                </div>
                
                <div id="tr_img">
                   <Carousels/>
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