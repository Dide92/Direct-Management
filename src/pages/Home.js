import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Nyc from '../images/nyc.jpeg';
import '../App.css';

const Home = () => {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const items = document.querySelectorAll('.scroll-box'); // Change to .scroll-box
      const triggerBottom = window.innerHeight * 0.8;

      items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    const handleParallaxScroll = () => {
      const parallax = document.getElementById('parallax');
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + 'px';
    };

    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('scroll', handleParallaxScroll);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
      window.removeEventListener('scroll', handleParallaxScroll);
    };
  }, []);
  
  return (
    <section>
      <div id="parallax" className="parallax-item">
      </div>
      <div className="parallax-item">
      </div>
      <div className="parallax-item">
        <h2>SERVICES</h2>
        <ul className="scroll-list">
          <li className="animate-scroll">
            <div className="scroll-box">
              <h3>Box 1</h3>
              <p>Content for Box 1</p>
            </div>
          </li>
          <li className="animate-scroll">
            <div className="scroll-box">
              <h3>Box 2</h3>
              <p>Content for Box 2</p>
            </div>
          </li>
          <li className="animate-scroll">
            <div className="scroll-box">
              <h3>Box 3</h3>
              <p>Content for Box 3</p>
            </div>
          </li>
          <li className="animate-scroll">
            <div className="scroll-box">
              <h3>Box 4</h3>
              <p>Content for Box 4</p>
            </div>
          </li>
        </ul>
      </div>
     
      <div className="parallax-item">
        <h2>PROJECTS</h2>
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          <div>
            <img src={Nyc} alt="Project 1" />
            <p className="legend" style={{backgroundColor:"#557C79"}}>Project 1, Long Island, NY</p>
          </div>
          <div>
            <img src={Nyc} alt="Project 2" />
            <p className="legend" style={{backgroundColor:"#557C79"}}>Project 2, Fort Lee, NJ</p>
          </div>
          <div>
            <img src={Nyc} alt="Project 3" />
            <p className="legend" style={{backgroundColor:"#557C79"}}>Project 3, Brooklyn, NY</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
