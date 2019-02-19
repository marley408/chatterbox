import React from 'react';
import Dashboard from "./Pages/Dashboard";
import SignInPage from './Pages/SigninPage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/signin' component={SignInPage} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

export default App;
