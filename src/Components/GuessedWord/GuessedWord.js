import React from "react";
import PropTypes from "prop-types";

const GuessedWord = (props) => {
  let content;

  if (props.guessedWords.length === 0) {
    content = (
      <span data-test="guess-instructions"> Try to guess the secret word</span>
    );
  } else {
    let guessedWordsRows = props.guessedWords.map((word, index) => {
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchedCount}</td>
      </tr>;
    });
    content = (
      <div data-test="guessed-words">
        <h3>Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatched: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWord;
