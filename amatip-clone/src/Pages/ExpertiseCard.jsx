import react from 'react';
import './ExpertiseCard.css';


function ExpertiseCard({ image, title, text }) {
    return (
        <div className='expertise-card'>
            <div className="expertise-header">
                <img src={image} alt={title} className="expertise-icon" />
                <h3>{title}</h3>
            </div>
            <p>{text}</p>
            <a href="#" className="learn-more">Learn More</a>
        </div>
    );  
}

export default ExpertiseCard;