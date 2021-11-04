import React from "react";
import useCounter from "./useCounter";

const CounterOne = () => {
  const [count, method] = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => method.increment()}>Increment</button>
      <button onClick={() => method.decrement()}>Decrement</button>
      <button onClick={() => method.reset()}>Reset</button>
    </div>
  );
};

export default CounterOne;
