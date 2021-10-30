import React, { useEffect, useState } from "react";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = counter;
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter((val) => val + 1)}>
        {counter} - Increment
      </button>
    </div>
  );
};

export default HookCounter;
