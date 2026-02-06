import React, { useState, useEffect } from 'react';
import { fetchLandingContent } from '../services/api'; // Function to fetch content

// Landing Page Component
function LandingPage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const getContent = async () => {
      const data = await fetchLandingContent(); // Fetch data from the API
      setContent(data); // Set the content into the state
    };
    getContent(); // Call the function to get content
  }, []);

  if (!content) {
    return <div>Loading...</div>; // Show loading if content is not yet fetched
  }

  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>{content.headerTitle}</h1>
        <p>{content.headerDescription}</p>
      </header>

      <section className="landing-main-content">
        <div className="card">
          <img src={content.image1} alt="Feature 1" />
          <h2>{content.sectionTitle1}</h2>
          <p>{content.sectionDescription1}</p>
        </div>
        <div className="card">
          <img src={content.image2} alt="Feature 2" />
          <h2>{content.sectionTitle2}</h2>
          <p>{content.sectionDescription2}</p>
        </div>
      </section>

      <footer className="landing-footer">
        <p>{content.footerText}</p>
      </footer>
    </div>
  );
}

export default LandingPage;
