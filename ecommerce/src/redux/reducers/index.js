import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer.js";
import productReducer from "./productReducer.js";
import cartReducer from "./cartSlice.js";

export default combineReducers({
  categoryReducer,
  productReducer,
  cartReducer,
});
