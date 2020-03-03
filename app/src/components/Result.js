import React from 'react';


function Result(props) {
  return (
    <div className="list-item">
      <h1>
        {props.index + 1}. {props.name}
      </h1>
    </div>
  );
}

export default Result;
