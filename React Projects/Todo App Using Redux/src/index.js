import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TodoApp from "./TodoApp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./reducer/reducer";
const initState = {
  isLogged: false,
  userInfo: {},
  todoItem: [],
};

const store = createStore(Reducer, initState);

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
