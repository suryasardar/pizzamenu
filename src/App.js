import { useState } from "react";
import Payemnet from "./Payemnet";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, supstep] = useState(1);
  // const step = 1;
  function handleprevious() {
    supstep(step - 1);
  }
  function handelnext() {
    supstep(step + 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}> 1</div>
        {step === 1 && <div>hidfidjfkdj</div>}
        {step === 2 && <div>dfdfd</div>}
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
        <Payemnet />
      </div>

      <p className="message">
        {step}:{messages[step - 1]}
      </p>

      <div className="buttons">
        <button onClick={handleprevious}>previous</button>
        <button onClick={handelnext}>next</button>
      </div>
    </div>
  );
}
