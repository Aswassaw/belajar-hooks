import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterThree = () => {
  const [count, countDispatch] = useReducer(reducer, initialState);
  const [count2, countDispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => countDispatch("increment")}>Increment</button>
      <button onClick={() => countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countDispatch("reset")}>Reset</button>
      <hr />
      <h1>{count2}</h1>
      <button onClick={() => countDispatch2("increment")}>Increment</button>
      <button onClick={() => countDispatch2("decrement")}>Decrement</button>
      <button onClick={() => countDispatch2("reset")}>Reset</button>
    </div>
  );
};

export default CounterThree;
