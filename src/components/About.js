import React, { useState } from 'react';
import { User } from 'lucide-react';

const About = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="about" className="about">
      <h2 className="section-title">ABOUT ME</h2>
      
      <div className="about-content">
        <div className="about-image">
          {!imageError ? (
            <img 
              src="/images/profile.jpg" 
              alt="Bragadeesh Sellappa - About"
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
              fontSize: '3rem'
            }}>
              <User size={60} />
            </div>
          )}
        </div>
        
        <div className="about-text">
          <h3>Hi There! I'm Bragadeesh Sellappa</h3>
          <h4>MERN Full Stack & Mobile App Developer</h4>
          <p>
            I'm a passionate full-stack developer specializing in MERN stack development and mobile app creation. My work is driven by the desire to build robust, scalable, and user-friendly applications that solve real-world problems. I'm constantly learning and staying updated with the latest technologies and best practices to deliver innovative solutions with a focus on performance and user experience.
          </p>
          
          <div className="about-info">
            <div className="info-item">
              <strong>Experience:</strong> Full Stack Development
            </div>
            <div className="info-item">
              <strong>Email:</strong> rsbragadeesh@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 