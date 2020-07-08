import React from "react";
import Counter from "./components/Counter";
import ToDo from "./components/ToDo";
import useToDos from "./hooks/useToDos";

const App = () => {
  const { toDos } = useToDos();
  return (
    <>
      <Counter />
      <ToDo />
      {console.log(toDos)}
    </>
  );
};

export default App;
