import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, onIncrease, onDecrease, onInitial } = useCounter();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => onIncrease()}>INC</button>
      <button onClick={() => onInitial(0)}>INIT</button>
      <button onClick={() => onDecrease()}>DEC</button>
    </>
  );
};

export default Counter;
