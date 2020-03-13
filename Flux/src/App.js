import React, { Component } from "react";
import AltContainer from "alt-container";
import store from "./Flux/store";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Main from "./mainModule/Main";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AltContainer stores={{ store }}>
          <Main />
        </AltContainer>
      </React.Fragment>
    );
  }
}

export default App;
