// src/components/Contact.js

import React from 'react';
import './Contact.css';
import socialMediaIcons from '../images/social_media_icons.png';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Submit</button>
      </form>
      <footer>
        <img src={socialMediaIcons} alt="Social Media Icons" />
      </footer>
    </div>
  );
};

export default Contact;
