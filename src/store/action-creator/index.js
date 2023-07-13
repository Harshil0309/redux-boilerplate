import { ActionType } from "../action-type/ActionType";
import axios from "axios";
export const updateCurrency = (currency) => {
  return {
    type: ActionType.CHANGE_CURRENCY,
    payload: currency,
  };
};

export const fetchBlogs = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.FETCHING_BLOGS_START,
    });
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({
        type: ActionType.FETCHING_BLOGS_DONE,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.FETCHING_BLOGS_ERROR,
        payload: error,
      });
    }
  };
};

const ActionCreator = {
  updateCurrency: updateCurrency,
  fetchBlogs: fetchBlogs,
};

export default ActionCreator;
