import React, { useState } from 'react';
import Result from './Result';
import Map from './Map';
import './Form.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Form(props) {
  const [output, setOutput] = useState([]);
  const [result, setResult] = useState({
    progressBar: 1,
    currentStep: 1,
    displayResult: false,
    properties: {
      salary: '17',
      rent: '17',
      ptal: '17'
    },
    labels: {
      salary: 'Salary',
      rent: 'Rent',
      ptal: 'Public Transportation Accessibility'
    },
    currentValue: {

    }
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setResult({
      ...result,
      displayResult: true,
      currentStep: result.currentStep,
      properties: { ...result.properties, [name]: Math.round(value) }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { properties } = result;
    setResult({
      ...result,
      progressBar: result.progressBar+1
    });

    const resultArray = props.boroughs.map(item => {
      return {
        siteId: item.site,
        name: item.name,
        indices: { salary: 0, rent: 0, ptal: 0 },
        score: 0,
        lat: item.lat,
        lng: item.lng,
      };
    });

    const standardDeviation = 2.8722813232690143;

    const indexingArr = Object.entries(properties).map(item => {
      const mean = Number(item[1]);

      return {
        [item[0]]: [
          ...Array.from({ length: 33 }, (v, k) =>
            Math.round(
              230.4 *
                (1 / (Math.sqrt(2 * Math.PI) * standardDeviation)) *
                Math.exp(
                  (-1 * Math.pow(k * -1 + 32 - mean, 2)) /
                    (2 * Math.pow(standardDeviation, 2))
                )
            )
          ).reverse()
        ]
      };
    });

    const sortedData = [
      {
        salary: [
          props.boroughs.slice().sort((a, b) => {
            return a.salary > b.salary ? -1 : 0;
          })
        ]
      },
      {
        rent: [
          props.boroughs.slice().sort((a, b) => {
            return a.rent < b.rent ? -1 : 0;
          })
        ]
      },
      {
        ptal: [
          props.boroughs.slice().sort((a, b) => {
            return a.ptal > b.ptal ? -1 : 0;
          })
        ]
      }
    ];

    resultArray.forEach(result => {
      sortedData.forEach((data, dindex) => {
        let key = Object.keys(data);
        const insertIndex = data[key][0].findIndex((element, index) => {
          return element.name === result.name;
        });
        result.indices[key] = indexingArr[dindex][key[0]][insertIndex];
      });
    });

    resultArray.forEach((item, index) => {
      const values = Object.values(item.indices);
      item.score =
        values.reduce((a, b) => {
          return a + b;
        }) / values.length;
    });

    setOutput(
      resultArray
        .sort((a, b) => {
          return a.score > b.score ? -1 : 0;
        })
        .slice(0, 3)
    );
  }

  function _next() {
    let currentStep = result.currentStep;
    let currentProgress = result.progressBar;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep += 1;
    currentProgress +=1;
    setResult({
      ...result,
      progressBar: currentProgress,
      currentStep: currentStep
    });
  }

  function _prev() {
    let currentStep = result.currentStep;
    let currentProgress = result.progressBar;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep -= 1;
    (currentProgress === 4) ? (currentProgress -= 2) : (currentProgress -= 1);
    setResult({
      ...result,
      progressBar: currentProgress,
      currentStep: currentStep
    });
  }

  function previousButton() {
    let currentStep = result.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep < 1 && currentStep < 3) {
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
    <div className="container">
      <ProgressBar style={{ color: '#e6fc88' }} now={result.progressBar * 25} label={`${result.progressBar * 25}%`} />
      <form onSubmit={handleSubmit} className={result.progressBar === 4 ? 'form-container' : 'form-container active'}>
        <div className="form-group">
          <label
            htmlFor={Object.keys(result.properties)[result.currentStep - 1]}
          >
            {Object.values(result.labels)[result.currentStep-1]}
          </label>
          <div>
            v. low
          </div>
          <input
            className="slider"
            id={Object.keys(result.properties)[result.currentStep - 1]}
            name={Object.keys(result.properties)[result.currentStep - 1]}
            type="range"
            min="1"
            max="32"
            step="0.00001"
            value={Object.values(result.properties)[result.currentStep - 1]}
            onChange={handleChange}
          />
          <div>
            v. high
          </div>
        </div>
        <div className="button-container">
          {previousButton()}
          {nextButton()}
          {result.progressBar === 3 && (
            <button className="btn btn-success btn-block" type="submit">
              SUBMIT
            </button>
          )}
        </div>
      </form>
      {!!output.length && (
        <>
          <h1>Your Top London locations are:</h1>
          <div className="result-container">
            <div className="borough-container">
              {output.map((borough, index) => {
                return <Result {...borough} key={index + 1} index={index} />;
              })}
            </div>
            <Map output={output} />
          </div>
        </>
      )}
    </div>
  );
}

export default Form;
