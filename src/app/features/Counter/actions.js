import * as types from "./constants";

export const increment = (value) => {
  return {
    type: types.INCREMENT,
    value: value,
  };
};

export const decrement = (value) => {
  return {
    type: types.DECREMENT,
    value: value,
  };
};

export const decrementWitchCheckingAction = (value) => {
    return (dispatch, getState) => {
        if (getState().counter.count > 0) {
            dispatch(decrement(value));
        }
    }
}
