import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import phoneBook from './components/phoneBook';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/" component={phoneBook} />
        </Switch>
      </Router>
    );
  }
}
export default App;
