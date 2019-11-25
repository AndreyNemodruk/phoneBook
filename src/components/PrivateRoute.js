import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`,
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const isLogin = () => {
  let cook = false;
  if (getCookie('sessionIdLogIn')) cook = true;
  return cook;
};

const PrivateRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isLogin() ? (
      React.createElement(component, props)
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: props.location,
          },
        }}
      />
    ))}
  />
);

export default PrivateRoute;
