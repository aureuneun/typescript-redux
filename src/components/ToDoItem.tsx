import React from "react";
import useToDos from "../hooks/useToDos";

const ToDoItem = ({ id, text }: { id: string; text: string }) => {
  const { onRemoveToDo, onToggleToDo } = useToDos();
  return (
    <li>
      <span onClick={() => onToggleToDo(id)}>{text}</span>
      <button onClick={() => onRemoveToDo(id)}>x</button>
    </li>
  );
};

export default ToDoItem;
