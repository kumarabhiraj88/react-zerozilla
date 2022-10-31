import * as categoryTypes from "../types/categoryTypes.js";

const initState = {
  categoryList: [],
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case categoryTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categoryList: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
