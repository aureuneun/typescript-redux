import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../features";
import { increase, decrease, initial } from "../features/counter/actions";

const useCounter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  /*   const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onInitial = useCallback((value: number) => dispatch(initial(value)), [
    dispatch,
  ]); */

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onInitial = (value: number) => dispatch(initial(value));

  return { count, onIncrease, onDecrease, onInitial };
};

export default useCounter;
