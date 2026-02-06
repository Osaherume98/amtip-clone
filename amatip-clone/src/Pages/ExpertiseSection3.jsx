import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import "./ExpertiseSection.css";

import cloudImg from "../assets/cloud.png";
import cyberImg from "../assets/cyber_img.jpg";
import apiImg from "../assets/API_img.jpg";
import { PiPhoneIncomingThin } from "react-icons/pi";


function ExpertiseSection3() {
    return(
    <section className="expertise-section">
        <div className="expertise-grid">
        <ExpertiseCard
            image={cloudImg}
            title="Cloud Services & Solutions"
            text="The future is in the cloud. Transition with confidence, manage effortlessly,
             and harness the unparalleled flexibility of cloud capabilities.

"
        />
        <ExpertiseCard
            image={cyberImg}
            title="Cybersecurity Solutions"
            text="In a world of looming threats, security is paramount. Our cutting-edge measures,
             bolstered by regular audits, ensure your software remains an impregnable fortress."
        />
        <ExpertiseCard
            image={apiImg}
            title="API Development & Integration"
            text="Software synergy redefined. We design impeccable APIs and integrate third-party systems, 
            ensuring your software components engage in flawless conversation."
        />
        </div>
    </section>
    )
};

export default ExpertiseSection3;