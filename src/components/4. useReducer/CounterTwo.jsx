import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  const { firstCounter, secondCounter } = state;
  const { type, value = 1 } = action;

  switch (type) {
    case "increment":
      return {
        ...state,
        firstCounter: firstCounter + value,
      };
    case "decrement":
      return {
        ...state,
        firstCounter: firstCounter - value,
      };
    case "increment2":
      return {
        ...state,
        secondCounter: secondCounter + value,
      };
    case "decrement2":
      return {
        ...state,
        secondCounter: secondCounter - value,
      };
    case "reset":
      return {
        ...state,
        firstCounter: initialState.firstCounter,
      };
    case "reset2":
      return {
        ...state,
        secondCounter: initialState.secondCounter,
      };
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, countDispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>First: {count.firstCounter}</h1>
      <button onClick={() => countDispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => countDispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => countDispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => countDispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => countDispatch({ type: "reset" })}>Reset</button>

      <hr />

      <h1>Second: {count.secondCounter}</h1>
      <button onClick={() => countDispatch({ type: "increment2" })}>
        Increment
      </button>
      <button onClick={() => countDispatch({ type: "decrement2" })}>
        Decrement
      </button>
      <button onClick={() => countDispatch({ type: "increment2", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => countDispatch({ type: "decrement2", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => countDispatch({ type: "reset2" })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
