import React, { useState } from 'react';
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
          <h1>Our Approach</h1>
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
              <GiMoneyStack style={{pointerEvents: "none", marginRight: "10px"}} size={30} color={'salary' === clickedButton.id ? '#e6fc88' : '#dcdcdc'} />
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
                    style={{pointerEvents: "none", marginRight: "10px"}}
                    size={30}
                    color={'rent' === clickedButton.id ? '#e6fc88' : '#dcdcdc'}
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
              <FaBus style={{pointerEvents: "none", marginRight: "10px"}} size={30} color={'ptal' === clickedButton.id ? '#e6fc88' : '#dcdcdc'} />
              Transportation
            </button>
          </div>
        </div>
        <div
          className={clickedButton.id === 'salary' ? 'param' : 'param active'}
        >
          <h2>Weekly Salary</h2>
          <h3 className="underline"> </h3>
          <p>
            Based on your salary input, we find out which boroughs in London
            attract people in a similar income bracket.
          </p>
          <div className="duk-container">
            <div className="duk-header">Did you know?</div>
            <div className="duk-item">
              <div className="duk-number">90,6%</div>
              <div className="duk-text">
                ... is the difference in weekly gross salary between the City of
                London and the London Borough of Barking and Dagenham
              </div>
            </div>
          </div>
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
          <h3 className="underline"> </h3>
          <p>
            Your target weekly rent input allows us to determine which boroughs
            in London offer rents at this price.
          </p>
          <div className="duk-container">
            <div className="duk-header">Did you know?</div>
            <div className="duk-item">
              <div className="duk-number">£675</div>
              <div className="duk-text">
                ... is the average monthly rent (excluding bills) for a studio flat in the London Borough of Bexley - the lowest of all boroughs 
              </div>
            </div>
          </div>
          <p>
          Median market rates for a studio flat per borough were obtained from a study published in June 2019 by the Valuation Office Agency (VOA). Latest release for Q1 2019. Details available{' '} 
            <a href="https://www.gov.uk/government/collections/private-rental-market-statistics">
               here
            </a>
            .
          </p>
        </div>
        <div className={clickedButton.id === 'ptal' ? 'param' : 'param active'}>
          <h2>Public Transportation Accessibility Levels (PTAL)</h2>
          <h3 className="underline"> </h3>
          <p>
          PTALS are a measure of the accessibility of a point to the public transport network, taking into account walk access time and service availability.
          </p>
          <div className="duk-container">
            <div className="duk-header">Did you know?</div>
            <div className="duk-item">
              <div className="duk-number" id="last">City of London</div>
              <div className="duk-text">
                ... followed by The City of Westminster and the London Borough of Islington are respectively the top three best connected boroughs in London.
              </div>
            </div>
          </div>
          <p>
            The study was conducted by Transport for London. Data for 2015 is available{' '}
            <a href="https://data.london.gov.uk/dataset/public-transport-accessibility-levels?resource=ca17d14f-379e-469e-917c-ff1f21c5e3d4">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
