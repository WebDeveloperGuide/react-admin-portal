import React from 'react';
import {Switch,Route} from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import RegisterPage from './components/Register';
import Dashboard from './components/Dashboard';
import NotFoundPage from './components/NotFoundPage';

const Routing = () => {
  return(
      <Switch>
        <AuthRoute exact path="/" component={Login} />        
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={RegisterPage} />        
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    )
}

export default Routing;