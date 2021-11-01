import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef);

    // Focus the input element
    inputRef.current.focus();
    inputRef.current.value = "Manusia";
    inputRef.current.style.padding = "10px";
  }, []);

  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  );
};

export default FocusInput;
