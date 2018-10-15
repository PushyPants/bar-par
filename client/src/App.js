import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Employee from "./pages/Employee";
import Availability from "./pages/Availability";
import Dashboard from "./pages/Dashboard";
import Locations from "./pages/Locations";
import NoMatch from "./pages/NoMatch";
import Shifts from "./pages/Shifts";
import Inventory from "./pages/Inventory";
import axios from 'axios';
import CssBaseline from "@material-ui/core/CssBaseline";
import Summary from "./pages/Summary/Summary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      firstName: '',
      lastName:'',
      isAdmin: '',
      email: '',
      phone: '',
      password: '',
      avail: [],
      shifts: []
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    console.log("WackySmacky", userObject._id)
    this.setState(userObject);
    this.setState({
      loggedIn: true
    })
    console.log("VBORRROOO",this.state)
  }

  getUser() {
    axios.get("/api/employee/login").then(response => {

      if (response.data.user) {

        this.setState({
          loggedIn: true,
          email: response.data.user.email
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
      <CssBaseline />
      <Switch>
        <Route exact path="/" render={()=> 
        <SignIn updateUser={this.updateUser}/>} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addemp" component={Employee} />
        <Route exact path="/addavail" component={Availability} />
        <Route exact path="/shifts" component={Shifts} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/locations/station/:id" component={Inventory} />
        <Route exact path="/summary" component={Summary} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
    );
  }
}


export default App;
