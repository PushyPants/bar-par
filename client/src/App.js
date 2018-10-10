import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Availability from "./pages/Availability";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Locations from "./pages/Locations";
import Shifts from "./pages/Shifts";
import Inventory from "./pages/Inventory";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/addemp" component={Employee} />
            <Route exact path="/addavail" component={Availability} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/shifts" component={Shifts} />
            <Route exact path="/inventory" component={Inventory} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
