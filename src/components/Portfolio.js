import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application built with MERN stack featuring user authentication, payment integration, and admin dashboard.",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "React-based task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Fitness Tracking Mobile App",
      description: "Cross-platform mobile application built with React Native for tracking workouts, nutrition, and fitness goals.",
      category: "Mobile App"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling tools, and performance metrics.",
      category: "Full Stack"
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "Web-based chat application with Socket.io for real-time messaging, user authentication, and file sharing capabilities.",
      category: "Backend"
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "Mobile weather application with location-based forecasts, push notifications, and beautiful UI design.",
      category: "Mobile App"
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="section-title">PORTFOLIO</h2>
      
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <div className="portfolio-image">
              <div style={{ fontSize: '2rem' }}>💻</div>
            </div>
            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span style={{ color: '#fbbf24', fontSize: '0.9rem' }}>{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio; 