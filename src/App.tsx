import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";

const App = () => {
  const [fontSize, setFontSize] = useState(
    localStorage.getItem("FONT_SIZE")
      ? localStorage.getItem("FONT_SIZE")
      : "font-m"
  );

  const randomNumber = Math.floor(Math.random() * questions.length);
  return (
    <div className={`container ${fontSize}`}>
      <div>
        Q{randomNumber}. {questions[randomNumber]}
      </div>
      <button onClick={() => window.location.reload()}>OTHER</button>
    </div>
  );
};

export default App;
