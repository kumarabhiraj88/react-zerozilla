import * as categoryTypes from "../types/categoryTypes.js";

const initState = {
  categoryList: [],
  loading: true,
  error: "",
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case categoryTypes.CATEGORY_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryTypes.CATEGORY_FETCH_SUCCESS:
      return {
        ...state,
        categoryList: action.payload,
        loading: false,
      };
    case categoryTypes.CATEGORY_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default categoryReducer;
