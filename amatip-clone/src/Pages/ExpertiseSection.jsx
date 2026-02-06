import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import "./ExpertiseSection.css";

import trainingImg from "../assets/training-program.jpg";
import handImg from "../assets/pexels-cottonbro.jpg";
import techImg from "../assets/Amatip-tech-lab-2.jpg";
import planeImg from "../assets/plane-b2.jpg";
import { PiPhoneIncomingThin } from "react-icons/pi";

function ExpertiseSection() {
  return (
    <section className="expertise-section">
      <h2 className="expertise-title">
        Our Areas of <span>Expertise</span>
      </h2>
      <p className="expertise-subtitle">
        From innovative software solutions to focused IT training, Amatip IT is your gateway to technological excellence.
      </p>

      <div className="expertise-grid">
        <ExpertiseCard
          image={trainingImg}
          title="Comprehensive IT Training"
          text="Delve into meticulous, expert-guided training sessions in software engineering,
           UI/UX design, web development, data analysis, and more. Perfectly curated for tech aficionados, those eyeing a career pivot, and beginners,
           our training not only educates but also promises real-world job placements."
        />
        <ExpertiseCard
          image={handImg}
          title="Precision Placement"
          text="Experience the future of IT recruitment with our risk-free Precision Placement Program.
           Evaluate new hires for two months at no cost. If they don't fit,
           you pay nothing—we handle it all."
        />
        <ExpertiseCard
          image={techImg}
          title="Custom Software Development"
          text="Ever felt boxed in by off-the-shelf software? Break free. We craft bespoke software solutions,
           laser-focused on your unique business imperatives, 
          scalable, and primed for peak performance."
        />
        <ExpertiseCard
          image={planeImg}
          title="Web Application Development"
          text="The digital realm waits for no one. Experience web applications that are not just responsive, but intuitive. Optimized for speed,
           they ensure unmatched user experiences across devices."
          className="last-expertise-image"
        />

        


      </div>
    </section>
  );
}

export default ExpertiseSection;