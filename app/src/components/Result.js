import React from 'react';

function Result(props) {
  return (
    <div className="list-item">
      <h1>
         {props.name}
      </h1>
      <h3>
         Score: {props.score}
      </h3>
    </div>
  );
}

export default Result;
