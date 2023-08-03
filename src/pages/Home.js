import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar.js';
import '../App.css';
import Footer from '../components/footer.js';


const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section className='home' style={{ backgroundPositionY: -scrollPosition * 0.5 }}>
        <Navbar />
      </section>
      <section className='section2' style={{ backgroundPositionY: -scrollPosition * 0.5 }}>

      </section>
      <section className='section3' style={{ backgroundPositionY:1 }}>

      </section>
      <section className='section4'>
      </section>
      <section className='section5'>

</section>
    <Footer />
    </div>
  );
};

export default Home;
