import React, { useEffect } from "react";
import { connect } from "react-redux";
function LandingScreen(props) {
  useEffect(() => {
    console.log(props.isAuth, "AUTH");
    if (!props.isAuth) {
      props.history.push("/login");
    }
  }, [props.isAuth]);
  console.log(props.state, "state landing");
  return (
    <div>
      <div>
        <button onClick={() => props.logout()}>log out</button>
      </div>
      Landing Screen
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth:
    state.authDetails.token === undefined
      ? true
      : state.authDetails.token != null,
  state,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: "LOG_OUT" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);
