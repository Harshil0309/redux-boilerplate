import { ActionType } from "../action-type/ActionType";

const initial = {
  loading: true,
  error: false,
  data: [],
};

const reducer = (state = initial, action) => {
  if (action.type == ActionType.FETCHING_BLOGS_START) {
    return { loading: true, error: false, data: [] };
  } else if (action.type == ActionType.FETCHING_BLOGS_DONE) {
    return { loading: false, error: false, data: action.payload };
  } else if (action.type == ActionType.FETCHING_BLOGS_ERROR) {
    return { loading: false, error: action.payload, data: [] };
  }
  return state;
};

export default reducer;
