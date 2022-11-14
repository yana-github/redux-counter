import { INCREASE_NUM, DECREASE_NUM } from "./actions";

const defaultStore = {
  value: 0,
};

const reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case "INCREASE_NUM":
      return { ...state, 
        value: state.value +1 };
    case "DECREASE_NUM":
      return { ...state, 
        value: state.value -1 };

    default:
      return state;
  }
};

export default reducer;
