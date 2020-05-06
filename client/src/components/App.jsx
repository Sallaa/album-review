import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import New from "../Pages/New";

import Nav from "../Nav/Nav";

import { UserContext } from "../providers/UserProvider";

export default function App() {
  const [user] = useContext(UserContext);
  return (
      <Router>
        <div>
          <Nav />
          <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          {user !== null ? (
            <Route exact path="/new" component={New} />
          ) : (
            <Redirect to="/login" />
          )}
          </Switch>
        </div>
      </Router>
  );
}
