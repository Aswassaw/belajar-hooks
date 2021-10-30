import React, { useEffect, useState } from "react";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect executed");

    document.title = counter;
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter((val) => val + 1)}>
        {counter} - Increment
      </button>
      <br />
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default HookCounter;
