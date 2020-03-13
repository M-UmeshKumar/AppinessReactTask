import React, { Component } from "react";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";

class Main extends Component {
  state = {};
  render() {
    var { store } = this.props;
    var { page } = store;
    var showPage = "";
    switch (page) {
      case "Login":
        showPage = <Login store={store} />;
        break;
      case "Dashboard":
        showPage = <Dashboard store={store} />;
        break;
      default:
        showPage = <Login store={store} />;
    }
    return (
      <React.Fragment>
          {showPage}
      </React.Fragment>
    );
  }
}

export default Main;
