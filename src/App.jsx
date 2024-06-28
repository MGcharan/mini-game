import React, { useState } from "react";
import "./App.css";
import Result from "./Result";

function App() {
  const [secretNum, setSecretNum] = useState(Math.floor(Math.random() * 10) + 1);
  const [term, setTerm] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleChange = (e) => {
    const input = e.target.value;
    setTerm(input);
  };

  const handleRestart = () => {
    setSecretNum(Math.floor(Math.random() * 10) + 1);
    setTerm("");
    setAttempts(0);
  };

  const handleGuess = () => {
    setAttempts(attempts + 1);
  };

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">Guess the Number between 1 to 10: </label>
      </div>
      <input
        type="number"
        id="term"
        name="term"
        value={term}
        onChange={handleChange}
        min="1"
        max="10"
      />
      <Result
        secretNum={secretNum}
        term={term}
        attempts={attempts}
        onRestart={handleRestart}
        onGuess={handleGuess}
      />
      {term && (
        <p className="try">Attempts: {attempts}</p>
      )}
    </div>
  );
}

export default App;
