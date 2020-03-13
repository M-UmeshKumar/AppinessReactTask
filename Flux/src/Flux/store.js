import MockActions from "./actions";

import alt from "./alt";

var userJson = {
    "username": "hruday@gmail.com",
    "password": 'hruday123'
}

var employeesList = {
    user: [{
            "id": 1,
            "name": "test1",
            "age": "11",
            "gender": "male",
            "email": "test1@gmail.com",
            "phoneNo": "9415346313"
        },
        {
            "id": 2,
            "name": "test2",
            "age": "12",
            "gender": "male",
            "email": "test2@gmail.com",
            "phoneNo": "9415346314"
        },
        {
            "id": 3,
            "name": "test3",
            "age": "13",
            "gender": "male",
            "email": "test3@gmail.com",
            "phoneNo": "9415346315"
        },
        {
            "id": 4,
            "name": "test4",
            "age": "14",
            "gender": "male",
            "email": "test4@gmail.com",
            "phoneNo": "9415346316"
        },
        {
            "id": 5,
            "name": "test5",
            "age": "15",
            "gender": "male",
            "email": "test5@gmail.com",
            "phoneNo": "9415346317"
        },
        {
            "id": 6,
            "name": "test6",
            "age": "16",
            "gender": "male",
            "email": "test6@gmail.com",
            "phoneNo": "9415346318"
        }
    ]
}

var bindListenersObject = {};
for (var i in MockActions)
    if (typeof MockActions[i] === "function")
        bindListenersObject[i] = MockActions[i];

export default alt.createStore({
    displayName: "store",
    bindListeners: bindListenersObject,
    state: {
        page: "Login",
        user: userJson,
        employeesList: employeesList.user
    },
    storeSetState(obj) {
        this.setState(obj);
    },
    setLogout() {
        this.setState({ page: "Login" });
    },

    checkLogin(obj) {
        var { user = {} } = this.state;
        var { username, password } = obj;
        if (user.username === username && user.password === password) {
            this.setState({ page: "Dashboard" })
        } else {
            // this.setState({ page: "Dashboard" })
            alert("Invalid User")
        }
    },
});