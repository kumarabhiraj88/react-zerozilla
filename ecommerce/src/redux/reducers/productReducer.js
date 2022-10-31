import * as productTypes from "../types/productTypes.js";

const initState = {
  productList: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case productTypes.FETCH_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
