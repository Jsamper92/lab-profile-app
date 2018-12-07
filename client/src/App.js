import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
          <Route exact path="/auth/login" component={Login}/>
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/" component={Home}></Route>
      </Switch>
      
      </div>
    );
  }
}

export default App;
