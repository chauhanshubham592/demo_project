import React from "react";
import { connect } from "react-redux";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import { Navbar, Button } from "react-bootstrap";

function Header(props) {
  return (
    <div className="myheader">
      <Navbar expand="sm" className="p-1">
        <Navbar.Brand className="d-flex align-items-center">
          <span>
            <FaIcons.FaBattleNet className="mylogo" />
          </span>
          <span className="mybrand p-2 text-white">My Todo</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-sm-flex justify-content-end"
        >
          {props.name && (
            <div className="myuser mr-sm-4">
              <RiIcons.RiAccountCircleFill className="myuserlogo d-inline-block" />
              {props.name}
              <Button
                className="logout_btn mx-3 bg- btn-sm "
                onClick={() => {
                  props.isLogged(false);
                  props.addInfo();
                }}
              >
                Log Out
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.userInfo.name ? state.userInfo.name : null,
  };
};
const mapDispatchToProps = (dispatch) => ({
  isLogged: (val) => dispatch({ type: "LOGGED_IN", payload: val }),
  addInfo: (val) => dispatch({ type: "LOG_OUT_INFO", payload: val }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
