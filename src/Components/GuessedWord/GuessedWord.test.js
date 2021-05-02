import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProp, checkProps } from "../../test/testUtils";
import GuessedWords from "./GuessedWord";

const defaultProps = [
  {
    guessedWords: "bum",
  },
];

/**
 * Factory function to create a ShallowWrapper for the Congrats Component
 * @function setup
 * @param {object} props -Components props specific to this set up
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...Prop };
  return shallow(<GuessedWords {...setupProps} />);
};

//prop type tests

test("Does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});
