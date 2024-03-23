import React, {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleDecrement = () => {
    setCount((c) => c - 1);
  };
  return (
    <div className="counter-container">
      <div className="counter-display">{count}</div>
      <button onClick={handleIncrement}>
        <p className="btn-text">+</p>
      </button>
      <button onClick={handleReset}>🆑</button>
      <button onClick={handleDecrement}>
        <p className="btn-text">-</p>
      </button>
    </div>
  );
}

export default Counter;
