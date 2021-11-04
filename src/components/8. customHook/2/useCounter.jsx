import { useState } from "react";

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((val) => val + 1);
  };

  const decrement = () => {
    setCount((val) => val - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return [count, { increment, decrement, reset }];
};

export default useCounter;
