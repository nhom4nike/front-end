import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({
  component: Component,
  authen,
  pathNameRedirect,
  path,
}) => (
  <Route
    path={path}
    exact
    render={() =>
      localStorage.getItem(authen) === 'true' ? (
        <Component />
      ) : (
        <Redirect to={pathNameRedirect} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authen: PropTypes.string.isRequired,
  pathNameRedirect: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
