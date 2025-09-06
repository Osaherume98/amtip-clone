import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import "./ExpertiseSection.css";

import softwareImg from "../assets/software_img.jpg";
import supportImg from "../assets/support_img.png";
import commerceImg from "../assets/E-commerce.jpg";
import businessImg from "../assets/business_img.jpg";
import { PiPhoneIncomingThin } from "react-icons/pi";


function ExpertiseSection4() {
    return(
    <section className="expertise-section">
        <div className="expertise-grid">
        <ExpertiseCard
            image={softwareImg}
            title="Software Quality Assurance & Testing"
            text="Trust, but verify. Our rigorous testing processes,
             both automated and manual, ensure your software stands tall under any scenario."
        />
        <ExpertiseCard
            image={supportImg}
            title="Software Maintenance & Support"
            text="Evolution is inevitable. With our ongoing support and regular updates,
             your software isn't just maintained; it's future-proofed."
        />
        <ExpertiseCard
            image={commerceImg}
            title="E-commerce Development"
            text="E-commerce is more than a platform; it's an experience. Our solutions offer security, scalability,
             and a user-first approach, ensuring every click translates to satisfaction."
        />
        <ExpertiseCard
            image={businessImg}
            title="Data Analytics & Business Intelligence"
            text="Dive deep into the sea of data and emerge with actionable insights.
             We turn data into a strategic asset, fueling decision-making and business growth."
        />
        </div>
    </section>
    )
};

export default ExpertiseSection4;