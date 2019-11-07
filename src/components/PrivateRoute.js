import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = ()=> {
    let cook = false;
    if(document.cookie) cook = true;
    return cook;
};

const PrivateRoute =({ component, ...rest })=> {
    return (
        <Route
            {...rest}
            render={props =>
                isLogin() ? (
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
};

export default PrivateRoute;