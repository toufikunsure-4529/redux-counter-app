const intialState = 0;
const changedNumber = (state = intialState, action) => {
  if (action.type === "Increment") {
    return state + action.payload;
  } else if (action.type === "Decrement") {
    if (state <= 0) {
      return state;
    } else {
      return state - 1;
    }
  } else if (action.type === "Reset") {
    return intialState;
  } else {
    return state; // default case
  }
};

export default changedNumber;
