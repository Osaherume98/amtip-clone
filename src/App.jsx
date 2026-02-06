import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SignupPage from './Pages/SignupPage';
import Navbar from './components/Navbar';
import "./App.css";
import Hero from './Pages/Hero';
import PartnerSection from './Pages/PartnerSection';
import CoreOffering from './components/CoreOffering';
import Success from './assets/Success-story_img.jpeg';
import ReuseableSection from './components/ReuseableSection';
import Trainings from './Pages/Trainings';
import Recruitment from './Pages/Recruitment';
import Services from './Pages/Services';
import ExpertiseSection from './Pages/ExpertiseSection';
import ExpertiseSection2 from './Pages/ExpertiseSection2';
import ExpertiseSection3 from './Pages/ExpertiseSection3';
import ExpertiseSection4 from './Pages/ExpertiseSection4';
import SuccessStory from './components/SuccessStory';
import SingleCardCarousel from './Pages/Testimonial';
import ContactForm from './Pages/Contact';

function HomePage() {
  return (
    <div className="container">
      <Hero />
      <PartnerSection />
      <CoreOffering title="Our Core Offering" bgImage={Success} />
      <Trainings />
      <Recruitment />
      <Services />
      <ExpertiseSection />
      <ExpertiseSection2 />
      <ExpertiseSection3 />
      <ExpertiseSection4 />
      <SuccessStory />
      <SingleCardCarousel />
      <ContactForm />
    </div>
  );
}


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/training" element={<Trainings />} />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="/expertise" element={<ExpertiseSection />} />
              <Route path="/expertise2" element={<ExpertiseSection2 />} />
              <Route path="/expertise3" element={<ExpertiseSection3 />} />
              <Route path="/expertise4" element={<ExpertiseSection4 />} />
              <Route path="/success" element={<SuccessStory />} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App;