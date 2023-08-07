import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Nyc from "../images/nyc.jpeg"

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
      </div>
      <div className="parallax-item">
      </div>
      <div className="parallax-item">
        <h2>Home Div 3</h2>
      </div>
      <div className="parallax-item">
        <h2>PROJECTS</h2>
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          <div>
          <img src={Nyc} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
          <img src={Nyc} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
          <img src={Nyc} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
