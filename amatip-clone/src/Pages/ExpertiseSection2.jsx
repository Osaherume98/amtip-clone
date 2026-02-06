import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import "./ExpertiseSection.css";

import madImg from "../assets/MAD_image.jpg";
import designImg from "../assets/Design_img.jpg";
import dataImg from "../assets/Data-solution.jpg";
import { PiPhoneIncomingThin } from "react-icons/pi";


function ExpertiseSection2() {
    return(
    <section className="expertise-section">
        <div className="expertise-grid">
        <ExpertiseCard
            image={madImg}
            title="Mobile Application Development"
            text="Stay ahead in the mobile-first world. From iOS to Android to hybrid solutions,
            our mobile apps blend native feel with cross-platform functionality,
            offering users seamless experiences."

        />
        <ExpertiseCard
            image={designImg}
            title="UI/UX Design Services"
            text="First impressions count. We design interfaces that captivate and experiences that linger,
            striking the perfect balance between aesthetics and usability.

"
        />
        <ExpertiseCard
            image={dataImg}
            title="Database Solutions"
            text="Data is the new gold. Our robust database solutions are secure, scalable,
            and optimized to handle this precious resource with unmatched efficiency."
        />
        </div>
    </section>
    )
};

export default ExpertiseSection2;