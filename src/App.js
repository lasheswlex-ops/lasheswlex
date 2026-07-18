import React from 'react';
import './App.css';

import photo1 from './images/IMG_6345.JPG';
import photo2 from './images/IMG_6593.JPG';
import photo3 from './images/IMG_6613.JPG';
import photo4 from './images/IMG_7431.JPG';

function App() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">LashesWLex</h1>
          <ul className="nav-links">
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('services')}>Services</button></li>
            <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
            <li><button onClick={() => scrollToSection('booking')}>Book Now</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Welcome to LashesWLex</h2>
          <p>Home-Based Certified Lash Technician</p>
          <button className="cta-button" onClick={() => scrollToSection('booking')}>
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Classic Lash Extensions</h3>
            <p className="price">$80</p>
            <p>Beautiful, natural-looking lash extensions perfect for everyday wear.</p>
            <ul>
              <li>Duration: 2-3 hours</li>
              <li>Lasts: 4-6 weeks</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Volume Lash Extensions</h3>
            <p className="price">$110</p>
            <p>Glamorous, fuller lash look with multiple thin lashes per natural lash.</p>
            <ul>
              <li>Duration: 2.5-3.5 hours</li>
              <li>Lasts: 4-6 weeks</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Hybrid Lash Extensions</h3>
            <p className="price">$95</p>
            <p>Best of both worlds - a blend of classic and volume for a balanced look.</p>
            <ul>
              <li>Duration: 2-3 hours</li>
              <li>Lasts: 4-6 weeks</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Lash Fill</h3>
            <p className="price">$40-50</p>
            <p>Maintain your gorgeous lashes with regular touch-ups.</p>
            <ul>
              <li>Duration: 45 mins - 1.5 hours</li>
              <li>Recommended: Every 3-4 weeks</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Lash Removal</h3>
            <p className="price">$25</p>
            <p>Safe and gentle removal of lash extensions without damaging natural lashes.</p>
            <ul>
              <li>Duration: 15-30 minutes</li>
              <li>Professional care</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Lash Lift</h3>
            <p className="price">$65</p>
            <p>Enhance your natural lashes with a beautiful lift and tint.</p>
            <ul>
              <li>Duration: 1-1.5 hours</li>
              <li>Lasts: 6-8 weeks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
<section id="gallery" className="gallery">
  <h2>Our Work</h2>
  <div className="gallery-grid">
    <div className="gallery-item">
      <img src={photo1} alt="Lash Extensions" style={{width: '100%', height: '250px', objectFit: 'cover'}} />
    </div>
    <div className="gallery-item">
      <img src={photo2} alt="Lash Extensions" style={{width: '100%', height: '250px', objectFit: 'cover'}} />
    </div>
    <div className="gallery-item">
      <img src={photo3} alt="Lash Extensions" style={{width: '100%', height: '250px', objectFit: 'cover'}} />
    </div>
    <div className="gallery-item">
      <img src={photo4} alt="Lash Extensions" style={{width: '100%', height: '250px', objectFit: 'cover'}} />
    </div>
  </div>
</section>

      {/* Booking Section */}
      <section id="booking" className="booking">
        <h2>Book Your Appointment</h2>
        <p>Select your service and choose a time that works for you!</p>
        <div className="booking-content">
          <p className="booking-note">
            📅 Click below to book your appointment
          </p>
          <button className="booking-button" onClick={() => {
  window.open('https://app.squareup.com/appointments/book/gilb366psvk4r4/LCCB3VAS3CVDG/start', '_blank');
}}>
  Reserve Your Spot
</button>
          <p className="booking-alternate">
            Or contact us directly at your phone number or email!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
<section id="contact" className="contact">
  <h2>Get In Touch</h2>
  <div className="contact-info">
    <div className="contact-item">
      <h3>📍 Location</h3>
      <p>Concord, CA</p>
    </div>
    <div className="contact-item">
      <h3>anything you can think of</h3>
      <p>idk what to put here just lmk...</p>
    </div>
    <div className="contact-item">
      <h3>✉️ Email</h3>
      <p>lasheswlex@gmail.com</p>
    </div>
  </div>
  
  <div className="social-links">
    <h3>Follow Us</h3>
    <a href="https://www.instagram.com/lasheswlex" target="_blank" rel="noopener noreferrer" className="ig-link">
      📸 @lasheswlex
    </a>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Lashes With Lex. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;