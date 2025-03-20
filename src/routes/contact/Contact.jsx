import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          console.log('SUCCESS!');
        },
        (error) => {
          setLoading(false);
          console.log('FAILED...', error.text);
        },
      );
  };

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
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder="Your Name" required />
            <input type="email" name='email' placeholder="Your Email" required />
            <textarea name='message' placeholder="Your Message" required></textarea>
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div id="social">
            <a href="https://www.linkedin.com/in/swagat-pritam-sahoo/" target='_blank' rel="noopener noreferrer" className='social-link'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://x.com/PritamSwagat" target='_blank' className='social-link'>
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://instagram.com/__swagat_pritam__" target='_blank' rel="noopener noreferrer" className='social-link'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/Swagat003" target='_blank' rel="noopener noreferrer" className='social-link'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
