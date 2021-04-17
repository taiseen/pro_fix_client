import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {

    const [loginUser, setLoginUser] = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                //(loginUser.name || loginUser.email || sessionStorage.getItem('token')) ? (
                loginUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;