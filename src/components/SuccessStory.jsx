import React from 'react';
import CoreOffering from './CoreOffering';
import bgImage from '../assets/Success-story_img.jpeg';
import "./coreOffering.css";

function SuccessStory() {
    return (
        <div className="success-story-section">
            <CoreOffering
                title="Our Success Stories"
                bgImage={bgImage}
            />
        </div>
    );
}

export default SuccessStory;