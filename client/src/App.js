import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Employee from "./pages/Employee"
import Availability from "./pages/Availability"
import NoMatch from "./pages/NoMatch";
import Jumbotron from "../src/components/Jumbotron";


const App = () => (
  <Router>
    <div>
      <Jumbotron>
        <h1 className="text-center"><strong>MySchedUL</strong></h1>
      </Jumbotron>
          <br/>
          <br/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addemp" component={Employee} />
          <Route exact path="/addavail" component={Availability} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
);

export default App;
