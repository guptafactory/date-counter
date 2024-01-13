import { useState } from "react";
import Days from "./Days";

export default function Steps() {
  const [step, setStep] = useState(1);
  function handlePrev() {
    if (step === 1) return;
    setStep((st) => st - 1);
  }
  function handleNext() {
    setStep((st) => st + 1);
  }
  return (
    <div style={{ margin: 5 }}>
      <button onClick={handlePrev} style={{ margin: 5 }}>
        -
      </button>
      Step: {step}
      <button onClick={handleNext} style={{ margin: 5 }}>
        +
      </button>
      <Days steps={step} />
    </div>
  );
}
