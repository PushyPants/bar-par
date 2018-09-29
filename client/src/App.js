import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

export default App;