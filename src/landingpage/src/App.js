import React from 'react';
import Main from './pages';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Discover from '../../components/Discover/Discover'
import Profile from '../../App'

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Profile} />
        <Route path="/signup" component={Discover}/>
      </Switch>
    </div>
  );
}

export default App;