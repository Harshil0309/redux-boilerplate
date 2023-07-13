import { useDispatch } from "react-redux";
import ActionCreator from "./store/action-creator/index";
const Currency = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(ActionCreator.updateCurrency("$"))}>
        $
      </button>
      <button onClick={() => dispatch(ActionCreator.updateCurrency("₹"))}>
        ₹
      </button>
    </div>
  );
};

export default Currency;

// inside react component , useDispatch => state update
// data fetching => start_loading_data
//  