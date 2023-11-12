import * as types from "./constants";

let initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + action.value,
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - action.value,
      };
    default:
      return state;
  }
};

export default counterReducer;
