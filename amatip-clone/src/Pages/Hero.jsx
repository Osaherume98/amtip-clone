import React from 'react';
import './Hero.css'



function Hero() {
  return (
    <section className="hero">
      <div className="hero-right">
        <h3 className="subheading">Amatip IT</h3>
        <h1 className="main-heading">
          Your Next Chapter<br />Begins with Amatip IT
        </h1>
        <p className="description">
          Merging tech, innovation, artistic flair, and industry insight to empower
          individuals and redefine business operations. Dive into IT, refine your prowess,
          or elevate your organization with bespoke solutions. Your tech future starts at Amatip IT.
        </p>
        <div className="button-group">
          <button className="btn btn-primary">Check Our Tech Services</button>
          <button className="btn btn-secondary">Check Our Tech Trainings</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;