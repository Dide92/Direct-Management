import React, { useEffect } from 'react';

const Home = () => {
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
        <h2>Projects Div 1</h2>
      </div>
      <div className="parallax-item">
        <h2>Projects Div 2</h2>
      </div>
      <div className="parallax-item">
        <h2>Projects Div 3</h2>
      </div>
      <div className="parallax-item">
        <h2>Projects Div 4</h2>
      </div>
    </section>
  );
};

export default Home;
