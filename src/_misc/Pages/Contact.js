import React, { useRef } from 'react';
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g36nv0r', 'template_ekv1e8r', form.current, 'Gow9sCb56iBjWfWQ5')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='contact-section'>
      <h1>Contact</h1>
      <div id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='contact-left'>
              <h1 className='sub-title'>Contactez Moi</h1>
              <p><FontAwesomeIcon icon={faEnvelope} size="1x" /> dioufmouhammad@gmail.com</p>
              <p><FontAwesomeIcon icon={faPhoneSquareAlt} size="1x" /> +1 514-706-6138</p>
              <div className='social-icons'>
                <a href='https://github.com/Diouf10' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href='https://www.facebook.com/mouhammad.diouf' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href='https://www.linkedin.com/in/mouhammad-wagane-diouf-b5943320b/' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href='https://www.instagram.com/mouhammad_diouf_/' target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
              <h3 className="cv_btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <a href="Docs/pdf/cv_Diouf_Mouhammad.pdf" download>Télécharger mon CV</a>
              </h3>
            </div>
            <div className='contact-right'>
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder='Nom' required />
                <input type="email" name="user_email" placeholder='Courriel' required />
                <textarea name='message' rows="6" placeholder="Message"></textarea>
                <button type='submit' className='btn'>Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
