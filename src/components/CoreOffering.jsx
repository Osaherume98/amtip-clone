import React from "react";
import "./CoreOffering.css";



function CoreOfferings({ title, bgImage }) {
  return (
    <section 
      className="core-offerings" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <h2>{title}</h2>
        <div className="underline"></div>
      </div>
    </section>
  );
}

export default CoreOfferings;
