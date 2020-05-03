import React, {useContext} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import New from './Pages/New';

import Nav from './Nav/Nav';

import {UserContextProvider} from './providers/UserProvider';
import { UserContext } from "./providers/UserProvider";

export default function App() {

  const user = useContext(UserContext);
  console.log(user);
  return (
    <UserContextProvider>
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/new">
            <New />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContextProvider>
  );
}