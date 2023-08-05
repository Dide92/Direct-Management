import React, { useEffect } from 'react';

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
      <div id="parallax" className="parallax-item">
        <h2>About page div 1</h2>
      </div>
      <div className="parallax-item">
        <h2>About page div 2</h2>
      </div>
      <div className="parallax-item">
        <h2>About page div 3</h2>
      </div>
      <div className="parallax-item">
        <h2>About page div 4</h2>
      </div>
    </section>
  );
};

export default About;
