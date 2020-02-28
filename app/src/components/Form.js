import React, { useState } from 'react';
import Map from './Map';
import Result from './Result';
import './Form.css';
import { GiMoneyStack, GiFamilyHouse } from 'react-icons/gi';

function Form(props) {
  const [result, setResult] = useState({
    currentStep: 1,
    displayResult: false,
    properties: {
      salary: '17',
      housePrice: '17',
      publicTransportAccesibility: '17'
    }
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    const toBeSet = {
      ...result,
      currentStep: result.currentStep,
      properties: { ...result.properties, [name]: value }
    };
    setResult(toBeSet);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { salary, housePrice, publicTransportAccesibility } = result.properties;
    setResult({
      ...result,
      displayResult: true
    });
    console.log('SUBMITTED!!!', result);
  }

  function _next() {
    let currentStep = result.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    setResult({
      ...result,
      currentStep: currentStep
    });
  }

  function _prev() {
    let currentStep = result.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setResult({
      ...result,
      currentStep: currentStep
    });
  }

  function previousButton() {
    let currentStep = result.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button className="btn btn-secondary" type="button" onClick={_prev}>
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  function nextButton() {
    let currentStep = result.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={_next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  return (
    <React.Fragment>
      <h1>A Wizard Form!</h1>
      <p>Step {result.currentStep} </p>

      <form onSubmit={handleSubmit}>
        <Step
          currentStep={result.currentStep}
          handleChange={handleChange}
          property={
            Object.keys(result.properties)[result.currentStep - 1]
          }
        />
        {previousButton()}
        {nextButton()}
      </form>
      {result.displayResult && (
        <div className="result-container">
          <h1>Your Top London locations are:</h1>
          <div className="borough-container">
            {result.map(borough => {
              return <Result {...borough} key={borough.siteId} />;
            })}
          </div>
          <Map />
        </div>
      )}
    </React.Fragment>
  );
  function Step(props) {
    return (
      <div className="form-group">
        <label htmlFor={props.property}>
          {props.property[0].toUpperCase() +
            props.property.slice(1, props.property.length)}
        </label>
        <input
          className="form-control"
          id={props.property}
          name={props.property}
          type="range"
          min="1"
          max="32"
          step="1"
          value={result.properties[props.property]}
          onChange={props.handleChange}
        />
        {result.currentStep === 3 && (
          <button className="btn btn-success btn-block" type="submit">
            SUBMIT
          </button>
        )}
      </div>
    );
  }
}

export default Form;
