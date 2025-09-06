import React from "react";
import "./Trainings.css";
import TrainingImg from "../assets/Training-Program.jpg";

function Trainings() {

  return (
    <section className="training-section">
      <div className="training-card">
        <div className="training-text">
          <h2>Empowering Tech Careers </h2>
          <p>
            Dive deep into immersive courses specially crafted for tech enthusiasts and career switchers. Our hands-on approach combined
             with in-depth industry knowledge uniquely positions us to uplift beginners, ensuring they flourish and make a mark in the tech landscape.
          </p>
          <button className="training-btn">Our Tech Training</button>
        </div>
        <div className="training-image">
          <img src={TrainingImg} alt="Training" />
        </div>
      </div>
    </section>
  );
}

export default Trainings;