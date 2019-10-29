import React from 'react';
import './App.css';
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import PhoneBook from "./components/phoneBook";
import AddNewContact from "./components/AddNewContact";
import Grid from "@material-ui/core/Grid";
import LeftBar from "./components/leftBar";

export function isLoggedIn() {
    let cook = false;
    if(document.cookie) cook = true;
  return cook;
}

// function getCookie(name) {
//     let matches = document.cookie.match(new RegExp(
//         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
// }

function getCookie (name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return
        c.substring(nameEQ.length, c.length);
    }

    return null;
};

function PrivateRoute({ component, ...rest }) {
  return (
      <Route
          {...rest}
          render={props =>
              isLoggedIn() ? (
                  React.createElement(component, props)
              ) : (
                  <Redirect
                      to={{
                        pathname: "/login",
                        state: {
                          from: props.location,
                        },
                      }}
                  />
              )
          }
      />
  );
}

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/login" component={LoginPage}/>
            <Grid container spacing={1} direction='row' alignItems="stretch" justify="center" component={'div'} style={{ height: '100vh', padding: '10px'}}>
                <PrivateRoute path="/" component={LeftBar}/>
                <PrivateRoute exact path="/" component={PhoneBook}/>
                <PrivateRoute path="/addCard" component={AddNewContact}/>
            </Grid>
          </Switch>

      </Router>
  );
}

export default App;
