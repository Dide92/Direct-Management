import React, { useEffect } from 'react';

const Contact = () => {
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
    <section className='section1'>
      <div id="parallax">
        <div className='about-img'>

        </div>
      </div>
      <div >
        <h2 className='about-header'>Contact Us</h2>
      </div>
      <div className="contact-info">
        <p>If you have any questions or inquiries, please feel free to reach out to us:</p>
        <ul>
          <li>Email: directmanagement@example.com</li>
          <li>Phone: (718) 274-4300</li>
          <li>Address: 4214 Astoria Blvd S, Queens, NY, 11103</li>
        </ul>
      </div>
 
 
    </section>
  );
};


export default Contact;
