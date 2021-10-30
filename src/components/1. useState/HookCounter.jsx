import React, { useState } from "react";

const HookCounter = () => {
  const initialCount = 0;
  const [counter, setCounter] = useState(initialCount);
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const customIncrement = (incrementVal) => {
    for (let i = 0; i < incrementVal; i++) {
      setCounter((val) => val + 1);
    }
  };

  const onChangeHandler = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <strong>{counter}</strong>
        <br />
        <button onClick={() => setCounter(counter + 1)}>Tambah</button>
        <button onClick={() => setCounter(counter - 1)}>Kurang</button>
        <button onClick={() => setCounter(initialCount)}>Reset</button>
        <button onClick={() => customIncrement(5)}>Tambah 5</button>
      </div>

      <br />

      <div>
        <strong>{name.firstName + " " + name.lastName}</strong>
        <br />
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={name.firstName}
          onChange={onChangeHandler}
        />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={name.lastName}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default HookCounter;
