import { useState } from "react";

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [history, setHistory] = useState([]);

  const choices = ["rock", "paper", "scissors"];

  const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)];
  };

  const playGame = (userChoice) => {
    const compChoice = getComputerChoice();
    
    setPlayerChoice(userChoice);
    setComputerChoice(compChoice);

    let gameResult = "";

    if (userChoice === compChoice) {
      gameResult = "It's a Draw!";
    } else if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      gameResult = "You Win! 🎉";
      setScore((prev) => ({ ...prev, player: prev.player + 1 }));
    } else {
      gameResult = "Computer Wins! 😢";
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }

    setResult(gameResult);
    
    // Add to history
    setHistory((prev) => [
      `${userChoice} vs ${compChoice} → ${gameResult}`,
      ...prev
    ].slice(0, 8)); // keep only last 8 games
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="game-container">
      <div className="score-board">
        <p>Player: <strong>{score.player}</strong></p>
        <p>Computer: <strong>{score.computer}</strong></p>
      </div>

      <div className="choices">
        <button onClick={() => playGame("rock")} className="choice-btn">✊ Rock</button>
        <button onClick={() => playGame("paper")} className="choice-btn">✋ Paper</button>
        <button onClick={() => playGame("scissors")} className="choice-btn">✌️ Scissors</button>
      </div>

      {playerChoice && (
        <div className="result">
          <p>You chose: <strong>{playerChoice}</strong></p>
          <p>Computer chose: <strong>{computerChoice}</strong></p>
          <h2>{result}</h2>
        </div>
      )}

      <button onClick={resetGame} className="reset-btn">Play Again</button>

      {history.length > 0 && (
        <div className="history">
          <h3>Game History</h3>
          <ul>
            {history.map((game, index) => (
              <li key={index}>{game}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}