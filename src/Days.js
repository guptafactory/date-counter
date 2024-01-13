import { useState } from "react";
import NewDate from "./NewDate";

export default function Days({ steps }) {
  const [count, setCount] = useState(0);
  function handlePrev() {
    setCount((cnt) => cnt - steps);
  }
  function handleNext() {
    setCount((cnt) => cnt + steps);
  }
  return (
    <div style={{ margin: 5 }}>
      <button onClick={handlePrev} style={{ margin: 5 }}>
        -
      </button>
      Count: {count}
      <button onClick={handleNext} style={{ margin: 5 }}>
        +
      </button>
      <NewDate count={count} />
    </div>
  );
}
