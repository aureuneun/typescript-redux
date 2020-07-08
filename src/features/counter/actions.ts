// const assertion
export const INCREMENT = "counter/increment" as const;
export const DECREMENT = "counter/decrement" as const;
export const INITIAL = "counter/initial" as const;

export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });
export const initial = (value: number) => ({ type: INITIAL, payload: value });
