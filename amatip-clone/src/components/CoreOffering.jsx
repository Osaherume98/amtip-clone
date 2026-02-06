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







// function CoreOfferings({ title, description, image, children }) {
//   return (
//     <section className="core-offerings" style={image ? { backgroundImage: `url(${image})` } : {}}>
//       <div className="overlay">
//         {title && <h2>{title}</h2>}
//         {description && <p>{description}</p>}
//         {children}
//         <div className="underline"></div>
//       </div>
//     </section>
//   );
// }

// export default CoreOfferings;


// function CoreOfferings() {
//   return (
//     <section 
//       className="core-offerings" 
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="overlay">
//         <h2>Our Core Offerings</h2>
//         <div className="underline"></div>
//       </div>
//     </section>
//   );
// }

// export default CoreOfferings;