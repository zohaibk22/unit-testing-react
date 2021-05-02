import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProp, checkProps } from "../../test/testUtils";
import GuessedWords from "./GuessedWord";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatched: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the Congrats Component
 * @function setup
 * @param {object} props -Components props specific to this set up
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

//prop type tests

test("Does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  //component renders without error

  test("Renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  //component renders some text or instructions for the user
  //Want to check that the span is present inside the component and has none-empty text

  test("Renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("If there are words guessed", () => {
  let wrapper;

  let guessedWords = [
    { guessedWord: "train", letterMatched: 3 },
    { guessedWord: "party", letterMatched: 5 },
    { guessedWord: "agile", letterMatched: 1 },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  //component renders without error

  test("renders without errors", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  //renders guessed word section
  test("Renders guessed Words section", () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });

  //displays the correct number of guessed words

  test("correct Number of guessed words", () => {
    const guessedWordsNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
    //not testing implementation details
    //just want to make sure that the specs are met
  });

  //
});
