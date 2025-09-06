import React from "react";
import "./Trainings.css";
import ReuseableSection from "../components/ReuseableSection.jsx";
import ServiceImg from "../assets/Amatip-Services.jpg";

function Services() {
  return (
    <div>
      <ReuseableSection
        title="Soft Engineering Services"
        description="Delivering state-of-the-art, custom software crafted with precision by our seasoned engineers. Infusing contemporary techniques with time-tested strategies, we turn your digital aspirations into tangible results."
        buttonText="Our Tech Services"
        image={ServiceImg}
        alt="Sponsor"
        // cardClassName="recruitment-card"
        cardClassName="service-card"
      />
    </div>
  )
};

export default Services;