import React, { useEffect, useState } from "react";
import "./logo.css";

export const Logo = () => {
  const [top, setTop] = useState(254);
  const [scale, setScale] = useState(1);
  const [isFixed, setIsFixed] = useState(false);
  const [maxHeight, setMaxHeight] = useState(1000);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const minTop = 160;
    const maxTop = 254;
    const maxScroll = 600;

    if (scrollPosition >= maxScroll) {
      setIsFixed(true);
      setTop(minTop);
      setMaxHeight(200);
    } 
    
    else {
      setIsFixed(false);
      const newTop = Math.max(minTop, maxTop - (scrollPosition / maxScroll) * (maxTop - minTop));
      const newScale = Math.max(0.5, 1 - (scrollPosition / maxScroll) * 0.5);
      setTop(newTop);
      setScale(newScale);
      setMaxHeight(1000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="images">
      <div id="front">
        <div className="full_logo">
          <a
            href="/"
            aria-label="Homepage"
            style={{
              maxWidth: `${maxHeight}px`,
              transform: `scale(${scale})`,
              top: isFixed ? 0 : `${top}px`,
              position: isFixed ? "fixed" : "absolute", 
              transformOrigin: "top", 
            }}
          >
            <img src="/img/logo-noback.png" alt="Classic Drip Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};