import logo from "./logo.svg";
import Congrats from "./Components/Congrats/Congrats";
import GuessedWords from "./Components/GuessedWord/GuessedWord";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: "train",
            letterMatchedCount: 2,
          },
        ]}
      />
    </div>
  );
}

export default App;
