import { useState } from 'react';
import './Contact.css';


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-section">
      <div className="background-overlay"></div>
      
      <div className="content-wrapper">
        <div className="form-container">
          <div className="form-header">
            <p className="contact-label">We will contact</p>
            <h2 className="form-title">
              Get a <span className="highlight">call back</span>
            </h2>
          </div>
          
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="tel">Tel</label>
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="Name"
                value={formData.tel}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>

            <button type="button" className="submit-btn" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>

        <div className="text-content">
          <p>
            Whether you're on the cusp of a new digital project or eager to 
            dive into one of our specialized IT training courses, we're here to 
            guide and assist you. At Amatip IT, your goals become our mission. 
            Reach out to us, and let's embark on this technological adventure together
          </p>
        </div>
      </div>
      </div>
  );
};


export default ContactForm;