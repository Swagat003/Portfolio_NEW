import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';

function Contact() {
  return (
    <section id="contact-section">
      <div className="container">
        <div id="contact-top">
          <h1>Contact</h1>
          <div id="resume-download">
            <Link to="/files/Swagat_Pritam_Sahoo_Resume.pdf" target="_blank" download className="resume-btn">Download Resume</Link>
          </div>
        </div>
        <div id="contact-bottom">
          <h2>Get in touch</h2>
          <p>Let's connect! Feel free to reach out.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
