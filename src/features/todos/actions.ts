export const ADD_TODOS = "todos/add" as const;
export const REMOVE_TODOS = "todos/remove" as const;
export const TOGGLE_TODOS = "todos/toggle" as const;

export const addToDo = (text: string) => ({ type: ADD_TODOS, payload: text });
export const removeToDo = (id: string) => ({ type: REMOVE_TODOS, payload: id });
export const toggleToDo = (id: string) => ({ type: TOGGLE_TODOS, payload: id });
