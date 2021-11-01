import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  user: {},
  loading: true,
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        user: {},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const FetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  }, []);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    <div>
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!isEmpty(state.user) && (
            <div>
              <p>
                Name: <strong>{state.user.name}</strong>
              </p>
              <p>
                Email: <strong>{state.user.email}</strong>
              </p>
              <p>
                Phone: <strong>{state.user.phone}</strong>
              </p>
            </div>
          )}

          {state.error && <p>{state.error}</p>}
        </>
      )}
    </div>
  );
};

export default FetchingTwo;
