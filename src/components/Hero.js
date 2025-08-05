import React, { useState } from 'react';
import { Globe, Linkedin, Twitter, Youtube, Github, User } from 'lucide-react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h3>Hello, I'm</h3>
          <h1>Bragadeesh<br />Sellappa</h1>
          <h2>Full Stack & Mobile App Developer</h2>
          <a href="#contact" className="cta-button">Hire Me</a>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <div className="hero-image">
            {!imageError ? (
              <img 
                src="/images/profile.jpg" 
                alt="Bragadeesh Sellappa - Full Stack Developer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
                onError={handleImageError}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1e293b',
                borderRadius: '20px',
                color: '#fbbf24',
                fontSize: '4rem'
              }}>
                <User size={80} />
              </div>
            )}
          </div>
          
          <div className="social-links" style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center'
          }}>
            <a href="#" className="social-link">
              <Globe size={20} />
            </a>
            <a href="https://www.linkedin.com/in/bragadeesh-sellappa-r-s-565056242/" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-link">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link">
              <Youtube size={20} />
            </a>
            <a href="https://github.com/BragadeeshSellappaRS" className="social-link">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 