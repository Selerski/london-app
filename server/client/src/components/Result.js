import React from 'react';
import { MdPeopleOutline, MdSchool } from 'react-icons/md';
import { GiMoneyStack, GiHouse, GiPoliceOfficerHead } from 'react-icons/gi';
import { IoMdHappy } from 'react-icons/io';
import { FaBus, FaBriefcase } from 'react-icons/fa';
import './Result.css';

function Result(props) {
  const { selected } = props;
  if (selected) {
    return (
      <div id={selected.siteId} className="list-item">
        <h1>{selected.name}</h1>
        <div className="property-list">
          <div className="property">
            <MdPeopleOutline size={30} /> <p>{selected.population}</p>
          </div>
          <div className="property">
            <GiMoneyStack size={30} /> <p> £ {selected.salary}</p>
          </div>
          <div className="property">
            <GiHouse size={30} /> <p>£ {selected.rent}</p>
          </div>
          <div className="property">
            <IoMdHappy size={30} /> <p> {selected.wellbeing}</p>
          </div>
          <div className="property">
            <FaBus size={30} /> <p>{selected.ptal}</p>
          </div>
          <div className="property">
            <GiPoliceOfficerHead size={30} /> <p>{selected.crime}</p>
          </div>
          <div className="property">
            <MdSchool size={30} /> <p>{selected.GSCE} </p>
          </div>
          <div className="property">
            <FaBriefcase size={30} />
            <p>{selected.unemployment}</p>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Result;
