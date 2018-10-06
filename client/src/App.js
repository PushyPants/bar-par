import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee"
import Availability from "./pages/Availability";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Locations from "./pages/Locations";


const App = () => (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/addemp" component={Employee} />
            <Route exact path="/addavail" component={Availability} />
            <Route exact path="/locations" component={Locations} />
          </Switch>
      </div>
    </Router>
);

export default App; 