import React, { useState, useEffect } from "react";
// import "./Result.css"; // Import your CSS file for animations

function Result({ secretNum, term, attempts, onRestart, onGuess }) {
  const [result, setResult] = useState("");
  const [maxAttempts, setMaxAttempts] = useState(3); // Maximum attempts allowed
  const [showAnimation, setShowAnimation] = useState(false); // State to control animation

  useEffect(() => {
    // Reset result and animation when term changes
    setResult("");
    setShowAnimation(false);
  }, [term]);

  const handleGuess = () => {
    if (term === "") {
      setResult("Enter a number between 1 and 10");
    } else if (term > secretNum) {
      setResult("Higher");
    } else if (term < secretNum) {
      setResult("Lower");
    } else if (term == secretNum) {
      setResult("Well Done, you guessed it right!");
      if (attempts === 0) {
        setShowAnimation(true); // Trigger animation if correct on first attempt
      }
    } else {
      setResult("Enter a valid number between 1 and 10");
    }
    onGuess();
  };

  const handleRestart = () => {
    setResult("");
    onRestart();
    setShowAnimation(false); // Reset animation state
    setMaxAttempts(3); // Reset maximum attempts
  };

  return (
    <div>
      {result && <h3>You Guessed: {result}</h3>}
      {result === "Well Done, you guessed it right!" && showAnimation && (
        <div className="crackers-animation"></div> // CSS handles the animation
      )}
      <br />
      {result === "Well Done, you guessed it right!" && (
        <button onClick={handleRestart}>Restart</button>
      )}
      {attempts >= maxAttempts &&  (
        <button className=" btn btn-start" onClick={handleRestart}>Restart</button>
      )}
      {term !== "" && attempts < maxAttempts &&  (
        <button className="  btn btn-guess" onClick={handleGuess}>Guess</button>
      )}
    </div>
  );
}

export default Result;
