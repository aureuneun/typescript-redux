import { increase, decrease, initial } from "./actions";

export type CounterState = {
  count: number;
};

export type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof initial>;
