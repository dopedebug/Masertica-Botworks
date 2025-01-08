import React from 'react';
import './Hero.css';
import bgGif from '../assets/bg.gif';

function Hero() {
  return (
    <section className="hero" id="home">
      <div 
        className="background-gif" 
        style={{ 
          backgroundImage: `url(${bgGif})`,
          backgroundColor: '#1a1a1a'
        }}
      ></div>
      <div className="hero-content" data-aos="fade-up">
        <h1>Transform Your Business with AI</h1>
        <p>Custom AI solutions for customer service, training, and automation</p>
        <a href="#contact" className="cta-button">Get Started</a>
      </div>
    </section>
  );
}

export default Hero; 