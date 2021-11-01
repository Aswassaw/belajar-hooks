import React, { useMemo, useState } from "react";

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  // isEven bukan lagi function, melainkan variabel yang menerima return dari useMemo
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <div>
        <button onClick={increment1}>Count One - {count1}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={increment2}>Count Two - {count2}</button>
      </div>
    </div>
  );
};

export default Counter;
