import React from 'react';
import './LandingPage.css';
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>
        <span className="city-underline">London's</span> first borough
        analyzer!
      </h1>
      <a href="form" className="link">
        <code>Click here to find your borough!</code>
      </a>
      <footer className="footer-container">
        <a className="twitter-icon" href="https://twitter.com/thepawelp">
          <FaTwitterSquare size={30} />
        </a>
        <a className="facebook-icon" href="https://www.facebook.com/pawelparsley">
          <FaFacebookSquare size={30} />
        </a>
        <a className="linkedin-icon" href="https://www.linkedin.com/in/pawe%C5%82-pietruszka-048a308a/">
          <FaLinkedin size={30} />
        </a>
        <span>© 2020 Pawel Pietruszka</span>
      </footer>
    </div>
  );
}

export default LandingPage;
