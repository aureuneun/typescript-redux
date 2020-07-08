import React, { useState, FormEvent, ChangeEvent } from "react";
import useToDos from "../hooks/useToDos";

const ToDoForm = () => {
  const { onAddToDo } = useToDos();
  const [value, setValue] = useState<string>("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddToDo(value);
    setValue("");
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Write a to do"
      />
    </form>
  );
};

export default ToDoForm;
