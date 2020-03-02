import React from 'react';
import './About.css';
import SelectedParameter from './SelectedParameter';

function About() {
  function openTab(name) {
    console.log(name);
    return <div></div>;
  }

  function handleClick(e) {
    console.log(e.target.value);
  }
  return (
    <div className="about-container">
      <div className="jumbotron-container">
        <h1 className="text-left">The future of house hunting is here!</h1>
        <div className="text-right">
          <p>
            <span> TownCrunchr</span>is the first platform to harness the power
            of statistics to help you decide on an area to live in London!
          </p>
          <div className="form-button">
            <a href="/form">START NOW!</a>
          </div>
        </div>
      </div>
      <div className="metric-container">
        <div className="tab-container">
          <div className="form-button">
            <button onClick={handleClick} value="salary">
              Your Weekly Salary
            </button>
          </div>
          <div className="form-button">
            <button onClick={handleClick} value="rent">
              Target Rent Rate (Studio Flat)
            </button>
          </div>
          <div className="form-button">
            <button onClick={handleClick} value="ptal">
              Public Transportation Accesibility
            </button>
          </div>
        </div>
        <SelectedParameter />
      </div>
      <p>
        We use statistical methods to compute which area will suit your current
        needs! No more hassle, prolonged research,
      </p>
    </div>
  );
}

export default About;
