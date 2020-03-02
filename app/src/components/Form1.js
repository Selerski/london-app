import React, { useState } from 'react';
import Map from './Map';
import Result from './Result';
import './Form.css';
import { GiMoneyStack, GiFamilyHouse } from "react-icons/gi";

function Form(props) {
  const [result, setResult] = useState([]);
  const [salary, setSalary] = useState('17');
  const [housePrice, setHousePrice] = useState('17');
  const [
    publicTransportAccesibility,
    setPublicTransportAccesibility
  ] = useState('17');
  const [displayResult, setDisplayResult] = useState(false);

  function handleSalary(e) {
    e.preventDefault();
    setSalary(e.target.value);
  }
  function handleHousePrice(e) {
    e.preventDefault();
    setHousePrice(e.target.value);
  }
  function handlePublicTransportAccesibility(e) {
    e.preventDefault();
    setPublicTransportAccesibility(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setDisplayResult(true);

    const formInput = {
      salary: salary,
      hp: housePrice,
      ptal: publicTransportAccesibility
    };

    const housePriceIndex = [
      ...Array.from({ length: formInput.hp }, (v, k) => k * -1 + 32).reverse(),
      ...Array.from({ length: 33 - formInput.hp }, (v, k) => 31 - k)
    ];
    const salaryIndex = [
      ...Array.from(
        { length: formInput.salary },
        (v, k) => k * -1 + 32
      ).reverse(),
      ...Array.from({ length: 33 - formInput.salary }, (v, k) => 31 - k)
    ];
    const ptalArrayIndex = [
      ...Array.from(
        { length: formInput.ptal },
        (v, k) => k * -1 + 32
      ).reverse(),
      ...Array.from({ length: 33 - formInput.ptal }, (v, k) => 31 - k)
    ];
    // const maxHousePriceArrayEl = Math.max(housePriceArray);

    const resultArray = props.boroughs.map(item => {
      return {
        siteId: item.site,
        name: item.full_name,
        salary_index: 0,
        hp_index: 0,
        ptal_index: 0,
        score: 0
      };
    });

    const salaryArr = props.boroughs.slice().sort((a, b) => {
      return a.salary > b.salary ? -1 : 0;
    });
    const hpArr = props.boroughs.slice().sort((a, b) => {
      return a.house_price < b.house_price ? -1 : 0;
    });
    const ptalArr = props.boroughs.slice().sort((a, b) => {
      return a.ptal > b.ptal ? -1 : 0;
    });
    //handle hp index
    console.log(hpArr, ptalArr, housePriceIndex, ptalArrayIndex, resultArray);

    resultArray.forEach(item => {
      const insertIndex1 = hpArr.findIndex(element => {
        return element.full_name === item.name;
      });
      const insertIndex2 = ptalArr.findIndex(element => {
        return element.full_name === item.name;
      });
      const insertIndex3 = salaryArr.findIndex(element => {
        return element.full_name === item.name;
      });
      item.hp_index = housePriceIndex[insertIndex1];
      item.ptal_index = ptalArrayIndex[insertIndex2];
      item.salary_index = salaryIndex[insertIndex3];
    });
    resultArray.forEach(item => {
      item.score = (item.hp_index + item.ptal_index + item.salary_index) / 3;
    });

    console.log(resultArray);

    setResult(
      resultArray
        .sort((a, b) => {
          return a.score > b.score ? -1 : 0;
        })
        .slice(0, 3)
    );
    // I have 3 input vartiables - house price, salary and PTAL
    // define a result object having 32 entries with names of each borough and empty fields for
    // other metrics [{borough: NAME, salary_index: {}, hp_index: 0, }] which holds current scores aranged from highest to lowest
  }

  return (
    <div className="form-container">
      <h3>Submit your query</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label>Weekly salary:</label>
        <label><GiMoneyStack size={Number(salary)/32+1+'em'} color="green"/></label>
        <input
          className="form-field"
          id="salary"
          type="range"
          min="1"
          max="32"
          step="1"
          value={salary}
          onChange={handleSalary}
          placeholder="Insert your salary..."
        />
        <label>Target House Price</label>
        <label><GiFamilyHouse size={Number(housePrice)/32+1+'em'} color="yellow"/></label>
        <input
          className="form-field"
          id="house-price"
          type="range"
          min="1"
          max="32"
          step="1"
          value={housePrice}
          onChange={handleHousePrice}
        />
        <label>Public transportation accessibility</label>
        <input
          className="form-field"
          id="ptal"
          type="range"
          min="1"
          max="32"
          step="1"
          value={publicTransportAccesibility}
          onChange={handlePublicTransportAccesibility}
        />
        <input className="submit-button" type="submit" value="Submit" />
      </form>
      
      

      {displayResult && (
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
    </div>
  );
}

// function findMaxHousePrice() {
//   let cache = {};
//   return boroughArray => {
//     console.log(cache);
//     if (cache[maxPrice]) {
//       console.log('Fetching from cache');
//       return cache[maxPrice];
//     } else {
//       console.log('Calculating result');
//       let result = Math.max.apply(
//         Math,
//         boroughArray.map(borough => {
//           return borough.house_price;
//         })
//       );
//       cache[maxPrice] = result;
//       return result;
//     }
//   };
// }
// const maxPrice = findMaxHousePrice();

export default Form;
