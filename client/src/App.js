import React, {useState, useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import New from './Pages/New';
import Nav from './Nav/Nav';

export default () => {
  const [user, setUser] = useState(null);
  const callback = (user) => setUser(user);
  return (
    <Router>
      <div>
        <Nav user={user} callback={callback} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={() => <New user={user} />} />
        </Switch>
      </div>
    </Router>
  );
};
