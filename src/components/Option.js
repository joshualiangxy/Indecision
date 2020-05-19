import React from 'react';

const Option = props => (
  <div className="option">
    <p className="option__text">{props.option}</p>
    <button
      className="button button--remove"
      onClick={() => {
        props.remove(props.option);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
