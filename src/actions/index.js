export const increment = (num) => {
  return {
    type: "Increment",
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: "Decrement",
    // payload: -1,
  };
};

export const resetValue = () => {
  return {
    type: "Reset",
  };
};
