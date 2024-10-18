import classNames from "classnames";
import "./RGBQuizStyle.css";
import React, { useEffect, useState } from "react";

const RGBQuizApp = () => {
  // State to hold the current color to guess
  const [color, setColor] = useState("");
  // State to indicate whether the selected answer is correct
  const [isCorrect, setIsCorrect] = useState<boolean>();
  // State to track if an answer has been selected
  const [answerSelected, setAnswerSelected] = useState<boolean>(false);
  // State to hold the three answer options (one correct, two random)
  const [answers, setAnswers] = useState<string[]>([]);
  // State to track the number of correct and wrong answers
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  // Helper function to generate a random hex color
  const getRandomColor = () => {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };

  // Function to set up a new quiz round (generate a new color and options)
  const generateNewQuiz = () => {
    const actualAnswer = getRandomColor(); // The correct color
    setColor(actualAnswer); // Set the color to guess
    setAnswers(
      // Randomize the position of the correct answer among two other random options
      [actualAnswer, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
    setAnswerSelected(false); // Reset the selected state for the new round
    setIsCorrect(undefined); // Clear previous correctness state
  };

  // Effect to initialize the first quiz round when the component mounts
  useEffect(() => {
    generateNewQuiz(); // Set up the initial color quiz
  }, []);

  // Handle the user selecting an answer
  // debouce (() => , time) //helps ensure we dount rapid press.
  // usecall back would be nice to ensure we are not recreating the handleOnClick.
  const handleOnClick = (selectedAnswer: string) => {
    setAnswerSelected(true); // Mark that an answer has been selected

    if (selectedAnswer === color) {
      setIsCorrect(true); // Mark the answer as correct
      setCorrectCount((prevCount) => prevCount + 1); // Increment the correct count
      setTimeout(() => generateNewQuiz(), 1000); // After 1 second, start a new round
    } else {
      setIsCorrect(false); // Mark the answer as incorrect
      setWrongCount((prevCount) => prevCount + 1); // Increment the wrong count
    }
  };

  return (
    <div className="RGBApp">
      <div>
        <h1>RGB Color Picking Quiz!</h1>
        {/* The box displaying the color to guess */}
        <div className="guess-me-box" style={{ background: color }}></div>

        {/* Render the answer buttons */}
        {answers.map((answer, index) => (
          <button
            className="btn"
            key={`${answer}-${index}`} // Unique key based on color and index
            onClick={() => handleOnClick(answer)} // Handle answer click
          >
            {answer}
          </button>
        ))}

        {/* Display the result message if an answer has been selected */}
        <div className={classNames("answers", isCorrect ? "correct" : "wrong")}>
          {answerSelected && (isCorrect ? "Correct!" : "Wrong Answer")}
        </div>

        {/* Display the number of correct and wrong answers */}
        <div className="score">
          <p>Correct Answers: {correctCount}</p>
          <p>Wrong Answers: {wrongCount}</p>
        </div>
      </div>
    </div>
  );
};

export default RGBQuizApp;
