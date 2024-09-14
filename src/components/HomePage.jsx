import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function HomePage() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submithandler = () => {
    navigate(`/room/${input}`);
  };

  return (
    <div className="container">
      <div className="input-box">
        <input
          value={input}
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={submithandler}>Join</button>
      </div>
    </div>
  );
}

export default HomePage;
