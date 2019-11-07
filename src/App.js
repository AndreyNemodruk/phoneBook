import React, {Component} from 'react';
import './App.css';
import LoginPage from "./components/LoginPage";
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter, BrowserRouter} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import phoneBook from "./components/phoneBook";

class App extends Component{
    constructor(){

        super();
        this.state ={

        }
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/login" component = {LoginPage}/>
                    <PrivateRoute path="/" component={phoneBook}/>
                </Switch>
            </Router>
        )
    }

}
export default App

