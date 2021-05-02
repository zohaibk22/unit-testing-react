import React from "react";
import PropTypes from "prop-types";

const GuessedWord = (props) => {
  return <div>Div</div>;
};

GuessedWord.PropTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatched: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWord;
