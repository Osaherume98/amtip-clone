import React from "react";
import "./PartnerSection.css";
import partnerImg from "../assets/partner img.jpeg"; 

function PartnerSection() {
  return (
    <section className="partner-section">
      <div className="partner-card">
        <div className="partner-text">
          <h2>Let's Shape the Future Together</h2>
          <p>
            Seeking dynamic partners to join us in driving tech, innovation, and education.
            With your expertise and our vision, together we can redefine the boundaries
            of what's possible, collaborate, and amplify our impact.
          </p>
          <button className="partner-btn">Become a partner</button>
        </div>
        <div className="partner-image">
          <img src={partnerImg} alt="Partner" />
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;