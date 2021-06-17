import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import Reducer from "./reducer/reducer";

const initData = {
  authDetails: {
    token: undefined,
    expirationTime: "",
  },
  userInfo: [],
};

const store = createStore(Reducer, initData);

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
