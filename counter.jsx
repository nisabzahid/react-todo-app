import { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [maxVal, setMaxVal] = useState(5);
  const [minVal, setMinVal] = useState(0);

  function increment() {
    if (maxVal === counter) {
      return;
    }
    setCounter(counter + 1);
  }
  function decrement() {
    if (counter === minVal) {
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>

      <button onClick={increment}> +1</button>
      <button onClick={decrement}> -1</button>
      <br />
      <input
        name="max val"
        type="number"
        value={maxVal}
        // onChange={(e) => setMaxVal(parseInt(e.target.value))}
      />
      <br />
      <input
        name="min val"
        type="number"
        value={minVal}
        // onChange={(e) => setMinVal(parseInt(e.target.value, 0))}
      />
    </div>
  );
};

export default function App() {
  return <Counter />;
}

