import { ActionType } from "../action-type/ActionType";

const initial = {
  currency: "$",
};

const reducer = (state = initial, action) => {
  if (action.type == ActionType.CHANGE_CURRENCY) {
    return { ...state, currency: action.payload };
  }
  return state;
};

export default reducer;
