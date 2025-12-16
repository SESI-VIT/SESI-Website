import React, { useState } from 'react';
import "../styles/Achievements.css";
import LightRays from './LightRays';
import chapterAwardImg from '../assets/chapter-award.jpg';
import codeathonImg from '../assets/codeathon.jpg';

const Achievements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievements = [
    {
      id: 1,
      title: 'Best Student Chapter Award (National Category)',
      description: 'SESI VIT proudly received the Best Student Chapter Award (National Category) in VIT for the term 2023–2024, recognizing our commitment to promoting renewable energy and sustainable innovation across India.',
      image: chapterAwardImg,
      featured: true
    },
    {
      id: 2,
      title: 'Code-a-thon',
      description: 'A two-day tech event organized in collaboration with the School of Electronics and Communication Engineering (SENSE). Participants received brochures from top foreign universities. An informative session by a guest from Microsoft was followed by a hackathon that fostered creativity and problem-solving skills.',
      image: codeathonImg,
      featured: true
    }
  ];

  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="achievements-container">
      <div className="achievements-header">
        <div className="light-rays-wrapper">
          <LightRays
            raysOrigin="top-center"
            raysColor="#FDB81E"
            raysSpeed={3.5}
            lightSpread={6.6}
            rayLength={4.8}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.05}
            distortion={0.05}
            saturation={0.1}
            fadeDistance={0.8}
            pulsating={false}
          />
        </div>
        <h1 className="achievements-title">Our Achievements</h1>
        <p className="achievements-subtitle">
          Celebrating our milestones and contributions to the solar energy community
        </p>
      </div>

      <div className="achievements-content">
        <h2 className="section-title">Featured Achievements</h2>
        
        <div className="achievements-grid">
          {achievements.map(achievement => (
            <div 
              key={achievement.id} 
              className="achievement-card"
              onMouseMove={(e) => handleMouseMove(e, achievement.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="card-glow"
                style={
                  hoveredCard === achievement.id
                    ? {
                        background: `radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, rgba(253, 184, 30, 0.3) 0%, transparent 70%)`,
                        opacity: 1
                      }
                    : {}
                }
              ></div>
              <div className="achievement-header">
                <h3 className="achievement-title">{achievement.title}</h3>
                {achievement.featured && (
                  <span className="featured-badge">FEATURED</span>
                )}
              </div>
              <p className="achievement-description">{achievement.description}</p>
              {achievement.image && (
                <div className="achievement-image-container">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="achievement-image"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;