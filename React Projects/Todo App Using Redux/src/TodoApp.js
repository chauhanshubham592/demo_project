import React from "react";
import Header from "./component/Header";
import LogIn from "./component/LogIn";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./TodoApp.css";
import AddTodo from "./component/AddTodo";
import { connect } from "react-redux";
import TodoList from "./component/TodoList";

function TodoApp(props) {
  console.log(props.isLogged, "log");
  return (
    <div>
      <Header />
      {props.isLogged ? (
        <div>
          <AddTodo />
          <TodoList />
        </div>
      ) : (
        <LogIn />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
  };
};
export default connect(mapStateToProps)(TodoApp);
