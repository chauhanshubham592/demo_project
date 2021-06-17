import React, { useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import LandingScreen from "./component/LandingScreen";
import LoginScreen from "./component/LoginScreen";
import LogoutScreen from "./component/LogoutScreen";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    let token = window.localStorage.getItem("token")
      ? window.localStorage.getItem("token")
      : null;
    let expirationTime = window.localStorage.getItem("expirationTime")
      ? new Date(window.localStorage.getItem("expirationTime"))
      : "";
    props.authGetLocalStorage({ token, expirationTime });
  }, []);
  return (
    <div>
      App
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Route path="/logout" component={LogoutScreen} />
        <Route path="/landingscreen" component={LandingScreen} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  authGetLocalStorage: (val) =>
    dispatch({ type: "AUTH_GET_LOCALSTORAGE", payload: val }),
});
export default connect(null, mapDispatchToProps)(App);
