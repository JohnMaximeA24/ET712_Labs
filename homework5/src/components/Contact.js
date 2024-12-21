// src/components/Contact.js
import React from 'react';
import pugImage from '../images/pug.jpg'; // Updated path

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <img src={pugImage} alt="Pug" style={{ width: '300px', height: 'auto' }} />
      <p>If you have any questions about pugs or our services, feel free to reach out to us via email or phone!</p>
      <p> Email: PugLoves@gmail.com </p>
      <p> Number: +1 921249868436906 </p>
    </div>
  );
}

export default Contact;