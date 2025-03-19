import React from 'react';
import './css/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; CopyRight {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
