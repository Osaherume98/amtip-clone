
import React, { useState } from 'react';
import './Testimonial.css';
import girlImg from '../assets/girl-img.jpeg';
import whatsappImg from '../assets/WhatsApp-image.jpeg';
import roundImg from '../assets/WhatsApp-image-2.jpeg';
import proImg from '../assets/promas.jpg';
import phaseImg from '../assets/ponas-2.jpg';
import techImg from '../assets/Asotech.jpg';


const SingleCardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "Amatip IT transformed the way our startup operates. From the inception of our custom software to its flawless execution, their expertise is unmatched. And the post-launch support? Simply phenomenal!",
      name: "Abeebah Olaosebikan",
      avatar: girlImg,
      rating: 5
    },
    {
      id: 2,
      text: "Our e-commerce platform had its fair share of challenges. Partnering with Amatip IT was the best decision. Their innovative solutions not only resolved our issues but also enhanced our user experience significantly. They truly put 'trust' back in technology for us.",
      name: "Adigun Tawakalit",
      avatar: whatsappImg,
      rating: 5
    },
    {
      id: 3,
      text: "Transitioning to the tech world seemed daunting until I enrolled in Amatip IT's courses. The clarity, depth, and practical knowledge they offer is beyond anything I've experienced. Plus, the dedicated help with job placements was the cherry on top!",
      name: "Eng. Muh",
      avatar: roundImg,
      rating: 5
    },
    {
      id: 4,
      text: "The cybersecurity course at Amatip IT was a game-changer for me. The instructors have real-world experience, and their methods are both engaging and enlightening. I feel confident and prepared for the challenges of the digital world.",
      name: "Dr. Nafiu Oriyomi",
      avatar: proImg,
      rating: 5
    },
    {
      id: 5,
      text: "Our start ]uprequired a unique software solution, and generic product just weren't cutting it. Amatip IT's approach to custom software development was collaborative,innovative, and tailored precisely to our needs. tje results? Efficient and scalable solutions that drive our business forward.",
      name: "Nuru Abiodun",
      avatar: phaseImg,
      rating: 5
    },
    {
      id: 6,
      text: "Amatip IT's front-end development was comprehensive and incredibly hands-on. The mentors are approachable and experts in their field. I landed my dream job within month of competing the course, all thanks to the exceptional training and placement and assistance! ",
      name: "Eng. Sodiq Abediran",
      avatar: techImg,
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  // Calculate which 3 cards to show based on current slide
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const cardIndex = (currentSlide + i) % testimonials.length;
      cards.push(testimonials[cardIndex]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="testimonials-container">
      <div className="carousel-wrapper">
        <div className="testimonials-display">
          {visibleCards.map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${currentSlide}`} 
              className={`testimonial-card slide-in-${index}`}
            >
              <div className="quote-icon">
                <svg width="32" height="26" viewBox="0 0 40 32" fill="none">
                  <path d="M0 32V19.2C0 8.533 5.867 2.667 17.6 1.067L18.133 4.533C12.8 5.333 9.6 7.467 8.533 10.933H17.6V32H0ZM22.4 32V19.2C22.4 8.533 28.267 2.667 40 1.067L40.533 4.533C35.2 5.333 32 7.467 30.933 10.933H40V32H22.4Z" fill="#E8F4FD"/>
                </svg>
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">
                  {testimonial.text}
                </p>
                
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="author-info">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="author-avatar"
                  />
                  <h4 className="author-name">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: 4 }, (_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-nav">
        <button onClick={prevSlide} className="nav-btn prev" aria-label="Previous testimonial">
          ‹
        </button>
        <button onClick={nextSlide} className="nav-btn next" aria-label="Next testimonial">
          ›
        </button>
      </div>
      </div>
  );
};

      

export default SingleCardCarousel;
