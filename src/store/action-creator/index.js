import { ActionType } from "../action-type/ActionType";

export const updateCurrency = (currency) => {
  return {
    type: ActionType.CHANGE_CURRENCY,
    payload: currency,
  };
};

const ActionCreator = {
  updateCurrency: updateCurrency,
};

export default ActionCreator;
