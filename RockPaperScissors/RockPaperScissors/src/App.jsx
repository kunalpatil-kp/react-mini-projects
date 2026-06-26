import { useState } from "react";
import "./App.css";
import RockPaperScissors from "./RockPaperScissors";

export default function App() {
  return (
    <div className="app-container">
      <h1>✊ Rock Paper Scissors</h1>
      <RockPaperScissors />
    </div>
  );
}