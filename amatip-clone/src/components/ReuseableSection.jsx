import React from 'react';
import '../Pages/Trainings.css';

function ReuseableSection({ title, description, buttonText, image, alt, className, cardClassName }) {
  return (
    <section className={className || 'training-section'}>
      <div className={cardClassName || 'training-card'}>
        <div className="training-text">
          <h2>{title}</h2>
          <p>{description}</p>
          {buttonText && <button className="training-btn">{buttonText}</button>}
        </div>
        <div className="training-image">
          <img src={image} alt={alt || 'Section illustration'} />
        </div>
      </div>
    </section>
  );
}

export default ReuseableSection;