import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Stairs from '../../components/Stairs';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateForm = {
      from_name: name,
      from_email: email,
      message: message,
    };

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateForm,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setName('');
          setEmail('');
          setMessage('');
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            icon: true,
            className: "custom-toast-success",
          });
          console.log('SUCCESS!');
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message. Try again!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: "custom-toast-error",
          });
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <Stairs>
        <section id="contact-section">
          <div className="container">
            <div id="contact-top">
              <h1>Contact</h1>
              <div id="resume-download">
                <Link
                  to="/files/Swagat_Pritam_Sahoo_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="resume-btn"
                >
                  Download Resume
                </Link>
              </div>
            </div>
            <div id="contact-bottom">
              <h2>Get in touch</h2>
              <p>Let's connect! Feel free to reach out.</p>
              <form className="contact-form" onSubmit={sendEmail}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <div id="social">
                <a
                  href="https://www.linkedin.com/in/swagat-pritam-sahoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://x.com/PritamSwagat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://instagram.com/__swagat_pritam__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://github.com/Swagat003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="mailto:swagat.pritam.2003@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Stairs>
    </>
  );
}

export default Contact;
