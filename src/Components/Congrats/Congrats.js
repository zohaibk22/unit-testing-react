import React from "react";
import ReactDOM from "react-dom";

/**
 * @function
 * @param {object} props
 * @returns {JSX.Element}
 */

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! you guessed the word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

export default Congrats;

//receive the success state as a prop
