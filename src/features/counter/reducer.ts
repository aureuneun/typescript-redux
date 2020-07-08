import { CounterState, CounterAction } from "./types";
import { INCREMENT, DECREMENT, INITIAL } from "./actions";

const initialState: CounterState = {
  count: 0,
};

const reducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case INITIAL:
      return { count: action.payload };
    default:
      return state;
  }
};

export default reducer;
