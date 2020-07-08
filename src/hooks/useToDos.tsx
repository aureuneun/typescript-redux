import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../features";
import { addToDo, removeToDo, toggleToDo } from "../features/todos/actions";

const useToDos = () => {
  const toDos = useSelector((state: RootState) => state.todos.toDos);
  const dispatch = useDispatch();

  const onAddToDo = (text: string) => dispatch(addToDo(text));
  const onRemoveToDo = (id: string) => dispatch(removeToDo(id));
  const onToggleToDo = (id: string) => dispatch(toggleToDo(id));

  return { toDos, onAddToDo, onRemoveToDo, onToggleToDo };
};

export default useToDos;
