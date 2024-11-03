import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Discover And Get<br></br> New NFT Collections</h1>
        <div className="hero-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et.</p>
         <button className="getstarted">Get Started</button></div>

        
        <div className="hero-stats">
          <div className="stat-pair">
            <span className="highlight">43k+</span> <span className="stat-text">Collections</span>
          </div>
          <span className="separator">|</span>
          <div className="stat-pair">
            <span className="highlight">16k+</span> <span className="stat-text">Auctions</span>
          </div>
          <span className="separator">|</span>
          <div className="stat-pair">
            <span className="highlight">10k+</span> <span className="stat-text">Artists</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
