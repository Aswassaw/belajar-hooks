import React, { useEffect, useState } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countInterval = setInterval(() => {
      tick();
    }, 1000)

    return () => {
      clearInterval(countInterval);
    }
  }, [])

  const tick = () => {
    setCount((val) => val + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default IntervalHookCounter;
