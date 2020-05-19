import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--remove" onClick={props.removeAll}>
        Remove All
      </button>
    </div>
    {props.options.map((option, index) => (
      <Option option={option} key={index} remove={props.remove} />
    ))}
    {props.options.length === 0 && (
      <p className="widget__message">Add an option to get started!</p>
    )}
  </div>
);

export default Options;
