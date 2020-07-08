import { addToDo, removeToDo, toggleToDo } from "./actions";

export type ToDo = {
  id: string;
  text: string;
  done: boolean;
};

export type ToDosState = {
  toDos: ToDo[];
};

export type ToDosAction =
  | ReturnType<typeof addToDo>
  | ReturnType<typeof removeToDo>
  | ReturnType<typeof toggleToDo>;
