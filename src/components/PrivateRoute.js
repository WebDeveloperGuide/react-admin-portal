import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';


const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            rest.loggedIn ?
                <Component {...props} />
            : <Redirect to="/dashboard" />
        )} />
    );
};

const mapStateToProps = state =>{
    return {
        loggedIn: state.auth.loggedIn
    }
}


export default connect(mapStateToProps)(PrivateRoute);