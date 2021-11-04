import { useState } from "react";

const useCounter = (initialCount = 0, addValue = 1) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((val) => val + addValue);
  };

  const decrement = () => {
    setCount((val) => val - addValue);
  };

  const reset = () => {
    setCount(0);
  };

  return [count, { increment, decrement, reset }];
};

export default useCounter;
