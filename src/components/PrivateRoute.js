import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // If a token exists in localStorage...
        if (localStorage.getItem("token")) {
          // ...go to the protected page...
          return <Component {...props} />;
        } else {
          // ...otherwise, go to the login page.
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute
