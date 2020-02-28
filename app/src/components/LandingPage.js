import React from 'react';
import './LandingPage.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function LandingPage() {


  return (
    <div className="landing-container">
      <h1>Discover the best places to live in London!</h1>
      <Link to={'/form'}>
        CLICK HERE TO FIND OUT MORE!
      </Link>
    </div>
  );
}

export default LandingPage;
