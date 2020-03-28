import React, { useState } from 'react';
import Map from './Map';
import './Form.css';

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
      salary: 'Weekly Salary',
      rent: 'Monthly Rent',
      ptal: 'Public Transportation Accessibility Levels'
    },
    currentValueMultiplier: {
      salary: `£ 600`,
      rent: `£ 900`,
      ptal: '6.5 (max 37)'
    }
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === 'salary') {
      setResult({
        ...result,
        displayResult: true,
        currentStep: result.currentStep,
        properties: { ...result.properties, [name]: Math.round(value) },
        currentValueMultiplier: {
          ...result.currentValueMultiplier,
          [name]:
            '£ ' +
            Math.round(
              (0.0261 * Math.pow(value, 3) -
                1.0122 * Math.pow(value, 2) +
                16.291 * value +
                466.36) /
                50
            ) *
              50
        }
      });
    } else if (name === 'rent') {
      setResult({
        ...result,
        displayResult: true,
        currentStep: result.currentStep,
        properties: { ...result.properties, [name]: Math.round(value) },
        currentValueMultiplier: {
          ...result.currentValueMultiplier,
          [name]:
            '£ ' +
            Math.round(
              (0.0743 * Math.pow(value, 3) -
                2.8389 * Math.pow(value, 2) +
                41.41 * value +
                613.71) /
                50
            ) *
              50
        }
      });
    } else {
      setResult({
        ...result,
        displayResult: true,
        currentStep: result.currentStep,
        properties: { ...result.properties, [name]: Math.round(value) },
        currentValueMultiplier: {
          ...result.currentValueMultiplier,
          [name]:
            Math.round(
              0.0028 * Math.pow(value, 3) -
                0.0909 * Math.pow(value, 2) +
                1.1509 * value +
                1.0187
            ) + ' (max 37)'
        }
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { properties } = result;
    setResult({
      ...result,
      progressBar: result.progressBar + 1
    });

    const resultArray = props.boroughs.map(item => {
      return {
        siteId: item.site,
        name: item.name,
        indices: { salary: 0, rent: 0, ptal: 0 },
        score: 0,
        population: item.population,
        rent: item.rent,
        housePrice: item.housePrice,
        salary: item.salary,
        ptal: item.ptal,
        wellbeing: item.wellbeing,
        crime: item.crime,
        GSCE: item.GSCE,
        unemployment: item.unemployment,
        lat: item.lat,
        lng: item.lng
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
            return a.salary < b.salary ? -1 : 0;
          })
        ]
      },
      {
        rent: [
          props.boroughs.slice().sort((a, b) => {
            return a.rent > b.rent ? -1 : 0;
          })
        ]
      },
      {
        ptal: [
          props.boroughs.slice().sort((a, b) => {
            return a.ptal < b.ptal ? -1 : 0;
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
    currentStep += 1;
    currentProgress += 1;
    setResult({
      ...result,
      progressBar: currentProgress,
      currentStep: currentStep
    });
  }

  function _prev() {
    let currentStep = result.currentStep;
    let currentProgress = result.progressBar;
    currentStep -= 1;
    currentProgress === 4 ? (currentProgress -= 2) : (currentProgress -= 1);
    setResult({
      ...result,
      progressBar: currentProgress,
      currentStep: currentStep
    });
  }

  function previousButton() {
    let currentStep = result.currentStep;
    if (currentStep !== 1 && currentStep < 3) {
      return (
        <button
          style={{ backgroundColor: 'green' }}
          className="btn btn-secondary"
          type="button"
          onClick={_prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  function nextButton() {
    let currentStep = result.currentStep;
    if (currentStep < 3) {
      return (
        <button
          style={{ backgroundColor: '#e6fc88', color: 'black' }}
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
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${result.progressBar * 25}%` }}
        >
          {result.progressBar * 25}%
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className={
          result.progressBar === 4 ? 'form-container' : 'form-container active'
        }
      >
        <div className="form-group">
          <label
            htmlFor={Object.keys(result.properties)[result.currentStep - 1]}
          >
            <h3>{Object.values(result.labels)[result.currentStep - 1]}</h3>
            <h3 className="underline"> </h3>
            <h3>
              {
                Object.values(result.currentValueMultiplier)[
                  result.currentStep - 1
                ]
              }
            </h3>
          </label>
          <div className="slider-container">
            <input
              className="slider"
              id={Object.keys(result.properties)[result.currentStep - 1]}
              name={Object.keys(result.properties)[result.currentStep - 1]}
              type="range"
              min="1"
              max="32"
              step="0.0000001"
              value={Object.values(result.properties)[result.currentStep - 1]}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="button-container">
          {previousButton()}
          {nextButton()}
          {result.progressBar === 3 && (
            <button className="success-btn" type="submit">
              SUBMIT
            </button>
          )}
        </div>
      </form>
      {!!output.length && (
        <>
          <div className="result-container">
            <h3>
              Click on a map marker to explore one of your top three boroughs!
            </h3>
            <div className="borough-container">
              <Map output={output} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Form;
