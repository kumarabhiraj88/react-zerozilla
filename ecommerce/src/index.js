import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import mystore from "./redux/store.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
//import { getCartTotal } from "./redux/reducers/cartSlice.js";

//mystore.dispatch(getCartTotal());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>
);
