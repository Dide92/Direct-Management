import React, { useEffect } from 'react';
import '../App.css';


const About = () => {
  useEffect(() => {
    const handleParallaxScroll = () => {
      const parallax = document.getElementById("parallax");
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    };

    window.addEventListener("scroll", handleParallaxScroll);

    return () => {
      window.removeEventListener("scroll", handleParallaxScroll);
    };
  }, []);

  return (
    <section>
      <div id="parallax">
        <div className='about-img'>

        </div>
      </div>
      <div >
        <h2>About Us</h2>
      </div>
      <div className="parallax-item">
        {/* <h2>About page div 3</h2> */}
      </div>
      <div className="parallax-item">
        {/* <h2>About page div 4</h2> */}
      </div>
    </section>
  );
};

export default About;
