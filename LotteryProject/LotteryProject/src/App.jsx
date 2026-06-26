import { useState } from "react";
import "./App.css";   

export default function App() {
 
  const [ticket, setTicket] = useState([0, 0, 0]);
  const [isWinner, setIsWinner] = useState(false);

 
  const generateTicket = () => {
    const newTicket = [
      Math.floor(Math.random() * 10),  
      Math.floor(Math.random() * 10),  
      Math.floor(Math.random() * 10)   
    ];

    setTicket(newTicket);

    
    const sum = newTicket[0] + newTicket[1] + newTicket[2];
    setIsWinner(sum === 15);
  };


  const ticketStr = ticket.join("");

  return (
    <div className="lottery-container">
      <h1>Lottery</h1>

      {isWinner && <h2 className="win-message">🎉 Congratulations, you won!</h2>}

      <div className="ticket-box">
        <p>Lottery Ticket = <strong>{ticketStr}</strong></p>
      </div>

      <button onClick={generateTicket} className="new-ticket-btn">
        Get New Ticket
      </button>

      <p className="info">
        Click the button to generate a new ticket. Win if sum of digits = 15.
      </p>
    </div>
  );
}