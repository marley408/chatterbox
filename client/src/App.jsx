import React from 'react';
import Chat from "./components/Chat";
import SignIn from './components/SignIn';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/chat' component={Chat} />
      </Switch>
    </div>
  </Router>
);

export default App;
