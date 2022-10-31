import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer.js";
import productReducer from "./productReducer.js";

export default combineReducers({
  categoryReducer,
  productReducer,
});
