var alt = require("./alt");

class Actions {
  constructor() {
    /* Action definition */
    this.generateActions(
      "storeSetState",
      "checkLogin",
      "setLogout"
    );
  }
}

export default alt.createActions(Actions);
