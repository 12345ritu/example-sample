import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../components/home";
import Welcome from "../components/welcome";

const Main = () => {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Welcome}></Route>
          <Route exact path='/home' component={Home}></Route>
        </Switch>
    </Router>
  );
}

export default Main;

