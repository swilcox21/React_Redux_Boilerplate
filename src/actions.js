// COUNTER ACTIONS
export const increment = (number) => {
  return {
    type: 'INCREMENT',
    payload: number,
  };
};
export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

// TOGGLE ACTIONS
export const toggle = () => {
  return {
    type: 'TOGGLE',
  };
};
