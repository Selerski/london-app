import React, { useState, useEffect } from 'react';
import './About.css';
import { GiMoneyStack, GiHouse } from 'react-icons/gi';
import { FaBus, FaChevronDown } from 'react-icons/fa';

function About() {
  const [clickedButton, setClickedButton] = useState({ id: 'salary' });

  function handleClick(e) {
    setClickedButton({ id: e.target.id });
  }
  return (
    <div className="about-container">
      <div className="jumbotron-container">
        <>
          <h1 className="text-left">The future of house hunting is here!</h1>
          <div className="text-right">
            <p>
              <span> TownCrunchr</span>is the first platform to harness the
              power of statistics to make your next house-search quick and easy!
            </p>
            <div className="form-button start-now">
              <a href="#metric">
                How do we do it?
                <FaChevronDown style={{ marginLeft: '5px' }} />
              </a>
            </div>
          </div>
        </>
      </div>
      <div id="metric" className="metric-container">
        <div className="algo-jumbotron-container">
          <h1>Algorithm</h1>
          <div>
            <p className="algo-para">
              To help you decide which area in London is best for you, we
              calculate an overall score for each borough based on the following
              data:
            </p>
          </div>
        </div>
        <div className="tab-container">
          <div className="form-button">
            <button
              onClick={handleClick}
              value="salary"
              id="salary"
              className={'salary' === clickedButton.id ? 'active' : ''}
            >
              <GiMoneyStack size={30} color="#1775fc" />
              Salary
            </button>
          </div>
          <div className="form-button">
            <button
              onClick={handleClick}
              value="rent"
              id="rent"
              className={'rent' === clickedButton.id ? 'active' : ''}
            >
              <GiHouse
                onClick={handleClick}
                value="rent"
                id="rent"
                size={30}
                color="#1775fc"
              />
              Rent
            </button>
          </div>
          <div className="form-button">
            <button
              onClick={handleClick}
              value="ptal"
              id="ptal"
              className={'ptal' === clickedButton.id ? 'active' : ''}
            >
              <FaBus id="ptal" value="ptal" size={30} color="#1775fc" />
              Transportation
            </button>
          </div>
        </div>
        <div className={clickedButton.id === 'salary' ? 'param' : 'param active'}>
          <h2>Weekly Salary</h2>
          <h3 className="underline"></h3>
          <p>
            Gross earnings per head by place of residence obtained from the 2019
            release of the Annual Survey of Hours and Earnings (ASHE) study,
            conducted by the Office for National Statistics. Full data is
            available{' '}
            <a href="https://data.london.gov.uk/dataset/earnings-place-residence-borough">
              here
            </a>
            .
          </p>
          <p>
            Gross earnings per head by place of residence obtained from the 2019
            release of the Annual Survey of Hours and Earnings (ASHE) study,
            conducted by the Office for National Statistics. Full data is
            available{' '}
            <a href="https://data.london.gov.uk/dataset/earnings-place-residence-borough">
              here
            </a>
            .
          </p>
        </div>
        <div className={clickedButton.id === 'rent' ? 'param' : 'param active'}>
          <h2>Weekly Rent</h2>
          <h3 className="underline"></h3>
          <p>
            We have collected data regarding the average salary in each London
            Borough. Data was{' '}
          </p>
        </div>
        <div className={clickedButton.id === 'ptal' ? 'param' : 'param active'}>
          <h2>Public Transportation Accessibility Rating</h2>
          <h3 className="underline"></h3>
          <p>
            We have collected data regarding the average salary in each London
            Borough. Data was{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
