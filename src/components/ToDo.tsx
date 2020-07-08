import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import ToDoItem from "./ToDoItem";
import useToDos from "../hooks/useToDos";

const ToDo = () => {
  const { toDos } = useToDos();
  return (
    <>
      <ToDoForm />
      <ToDoList title="ToDos">
        {toDos.map((toDo) => (
          <ToDoItem key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </ToDoList>
    </>
  );
};

export default ToDo;
