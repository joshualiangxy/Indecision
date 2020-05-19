import React from 'react';

const Action = props => (
  <div>
    <button
      className="big-button"
      onClick={props.decide}
      disabled={props.noOptions}
    >
      What should I do?
    </button>
  </div>
);

export default Action;
