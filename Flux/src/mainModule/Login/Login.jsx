import React, { Component } from "react";
import Actions from "../../Flux/actions";
class Login extends Component {
  state = {};
  loginButton = () => {
    var { username, password } = this.state;
    var obj = {};
    obj.username = username;
    obj.password = password;
    this.setState({ submitted: true });
    if (username && password) {
      Actions.checkLogin(obj);
      this.setState({ username: undefined, password: undefined,submitted: false });
    }
    
  };
  handleChange = (param, e) => {
    var obj = {};
    obj[param] = e.target.value;
    this.setState(obj);
  };
  render() {
    var { username, password,submitted=false } = this.state;

    return (
      <div className="corediv">
        <div className="display-flex">
          <div style={{width:"100%",padding:"50px"}}>
            <div style={{padding:"10px"}}>
              <div style={{padding:"10px 0px"}}>Enter your Email ID </div>
              <input className="form-control style-bord" type="text" value={username||''} onChange={this.handleChange.bind(this, "username")} />
              {submitted&&!username&&<div className="help-block">Username is required</div>}
            </div>
            <div style={{padding:"10px"}}>
              <div style={{padding:"10px 0px"}}>Enter Password</div>
              <input className="form-control  style-bord" type="text" value={password||''} onChange={this.handleChange.bind(this, "password")} />
              {submitted&&!password&&<div className="help-block">Password is required</div>}
            </div>
            <div style={{padding:"34px 0px 0px 85px"}}>
              <div>
                <button className="btn btn-outline-primary" style={{ width: 250 }} onClick={() => this.loginButton()}>Login</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
