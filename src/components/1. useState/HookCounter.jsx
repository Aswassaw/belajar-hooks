import React, { useState } from "react";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <strong>{counter}</strong>
      <br />
      <button onClick={() => setCounter(counter + 1)}>Tambah</button>
      <button onClick={() => setCounter(counter - 1)}>Kurang</button>
    </div>
  );
};

export default HookCounter;
