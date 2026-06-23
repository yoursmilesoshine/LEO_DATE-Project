import { useState } from "react";
import Confetti from "react-confetti";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    setNoPos({
      x: Math.random() * 250 - 100,
      y: Math.random() * 150 - 50
    });
  };

  if (page === "yay") {
    return (
      <div className="container">
        <Confetti />
        <div className="card">
          <img src="/leo.jpg" className="avatar" />
          <h1>WAIT... YOU SAID YES TO LEO? 😻</h1>
          <p>Leo is so happy right now 🐾</p>
          <button className="pink-btn" onClick={() => setPage("date")}>
            okay okay! →
          </button>
        </div>
      </div>
    );
  }

  if (page === "date") {
    return (
      <div className="container">
        <div className="card">
          <img src="/leo.jpg" className="avatar" />
          <h1>When are you free to play with Leo? 🐾</h1>
          <input className="input" type="date" />
          <select className="input">
            <option>Select a time...</option>
            <option>10:00</option>
            <option>13:00</option>
            <option>18:00</option>
            <option>20:00</option>
          </select>
          <button className="pink-btn" onClick={() => alert("Yay! Leo can't wait 😻")}>
            Set the date 💗
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <img src="/leo.jpg" className="avatar" />
        <h1>🐾 Will you go on a date with Leo? 🐾</h1>
        <div className="buttons">
          <button className="pink-btn" onClick={() => setPage("yay")}>
            YES 💗
          </button>
          <button
            className="purple-btn"
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
          >
            NO 😼
          </button>
        </div>
      </div>
    </div>
  );
}
