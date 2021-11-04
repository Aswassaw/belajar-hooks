import React from "react";
import useInput from "./useInput";

const UserForm = () => {
  const [firstName, FNbind, FNreset] = useInput();
  const [lastName, LNbind, LNreset] = useInput("Pebrianto");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    FNreset();
    LNreset();
    console.log(firstName + " " + lastName);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' name='firstName' {...FNbind} />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' name='lastName' {...LNbind} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
