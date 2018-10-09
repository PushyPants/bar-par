import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Employee from "./pages/Employee";
import Availability from "./pages/Availability";
import Dashboard from "./pages/Dashboard";
import Locations from "./pages/Locations";
import NoMatch from "./pages/NoMatch";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => (
  <Router>
    <div>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/addemp" component={Employee} />
        <Route exact path="/addavail" component={Availability} />
        <Route exact path="/locations" component={Locations} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
