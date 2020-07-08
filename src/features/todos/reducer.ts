import { ToDosState, ToDosAction } from "./types";
import { ADD_TODOS, REMOVE_TODOS, TOGGLE_TODOS } from "./actions";
import { v4 as uuidv4 } from "uuid";

const initialState: ToDosState = {
  toDos: [],
};

const reducer = (
  state: ToDosState = initialState,
  action: ToDosAction
): ToDosState => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        toDos: [
          ...state.toDos,
          { done: false, text: action.payload, id: uuidv4() },
        ],
      };
    case REMOVE_TODOS:
      return {
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    case TOGGLE_TODOS:
      return {
        toDos: state.toDos.map((toDo) =>
          toDo.id === action.payload ? { ...toDo, done: !toDo.done } : toDo
        ),
      };
    default:
      return state;
  }
};

export default reducer;
