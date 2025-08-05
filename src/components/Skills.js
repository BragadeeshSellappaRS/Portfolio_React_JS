import React from 'react';
import { Code, Database, Smartphone, Globe, Server, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React.js, HTML5, CSS3, and JavaScript"
    },
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express.js, and RESTful APIs"
    },
    {
      icon: <Database size={24} />,
      title: "Database Management",
      description: "Working with MongoDB, MySQL, and other databases for efficient data storage and retrieval"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description: "Developing cross-platform mobile applications using React Native and other mobile frameworks"
    },
    {
      icon: <Globe size={24} />,
      title: "Full Stack Development",
      description: "End-to-end application development with MERN stack and modern development practices"
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and better user experience"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="section-title">SKILLS</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 