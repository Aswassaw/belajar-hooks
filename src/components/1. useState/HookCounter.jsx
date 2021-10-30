import React, { useState } from "react";

const HookCounter = () => {
  const initialCount = 0;
  const [counter, setCounter] = useState(initialCount);

  const customIncrement = (incrementVal) => {
    for (let i = 0; i < incrementVal; i++) {
      setCounter((val) => val + 1);
    }
  };

  return (
    <div>
      <strong>{counter}</strong>
      <br />
      <button onClick={() => setCounter(counter + 1)}>Tambah</button>
      <button onClick={() => setCounter(counter - 1)}>Kurang</button>
      <button onClick={() => setCounter(initialCount)}>Reset</button>
      <button onClick={() => customIncrement(5)}>Tambah 5</button>
    </div>
  );
};

export default HookCounter;
