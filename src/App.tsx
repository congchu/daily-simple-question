import "./App.css";
import questions from "./questions";

const App = () => {
  const randomNumber = Math.floor(Math.random() * questions.length);
  return (
    <div className={`container font-m`}>
      <div>
        Q{randomNumber}. {questions[randomNumber]}
      </div>
      <button onClick={() => window.location.reload()}>OTHER</button>
    </div>
  );
};

export default App;
