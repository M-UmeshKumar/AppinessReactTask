import React, { Component } from "react";
import Actions from "../../Flux/actions";
class Dashboard extends Component {
  state = {};
  changePage = param => {
    var obj = {};
    obj.page = param;
    console.log(param,obj)
    Actions.storeSetState(obj);
  };


  render() {

    var { store } = this.props;
    var { employeesList = [] } = store;
    var header=Object.keys(employeesList[0]).map((a)=>a.toLocaleUpperCase())
    var headerKeys=Object.keys(employeesList[0])
    console.log(employeesList, "employeesList")
    return (
      <React.Fragment>
        <div className="corediv">
          <div className="display-flex">
            <div className="table-responsive" style={{width:"100%"}}>
            <table className="table table-striped table-hover">
              <thead className="thead-light">
                <tr>
                  {
                    header.map((a,i)=>{
                    return <th scope="col" key={i.toString()}>{a}</th>
                    })
                  }
                 
                </tr>
              </thead>
              <tbody>
                {
                  employeesList.map((a, i) => {
                    return <tr key={i.toString()}>
                      {
                        headerKeys.map((b,j) => {
                          return (b.toLocaleLowerCase() === "id") ? <th scope="row" key={j}>{a[b]}</th> : <td key={j}>{a[b]}</td>
                        })
                      }
                    </tr>
                  })
                }
              </tbody>
            </table>
            <div style={{marginLeft:"78%"}}><button className="btn btn-outline-primary" onClick={()=>this.changePage("Login")}>Back to login</button></div>
            </div>
            
          </div></div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
