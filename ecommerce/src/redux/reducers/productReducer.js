import * as productTypes from "../types/productTypes.js";

const initState = {
  productList: [],
  loading: true,
  error: "",
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case productTypes.PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productTypes.PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        loading: false,
      };
    case productTypes.PRODUCT_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productReducer;
