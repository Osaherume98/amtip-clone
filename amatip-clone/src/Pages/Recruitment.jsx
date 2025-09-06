import React from "react";
import "./Trainings.css";
import ReuseableSection from "../components/ReuseableSection.jsx";
import RecruitmentImg from "../assets/recruitment.jpg";

function Recruitment() {
  return (
    <div>
      <ReuseableSection
        title="Strategic IT Staffing Solutions"
        description="Discover our innovative recruitment framework, tailored for companies seeking the ideal tech talent. With Amatip IT, experience a two-month risk-free trial period where we cover all costs, allowing you to thoroughly evaluate each candidate’s fit within your team and culture. Our method is proven to lower turnover rates and match you with the best IT professionals who are ready to contribute to your vision. Join us and make every hire count with confidence!"
        buttonText="Our IT Recruitment Solution"
        image={RecruitmentImg}
        alt="Sponsor"
        cardClassName="recruitment-card"
      />
    </div>
  )
};

export default Recruitment;