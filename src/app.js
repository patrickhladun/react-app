import React, { Component, Fragment } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NotFound from './pages/NotFound';

class App extends Component {
    
    render() {
        return(
            <Fragment>
                <h1>Node API User Authentication</h1>
                <ul>
                    <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
                    <li><NavLink to="/login" activeClassName="is-active" exact={true}>Login</NavLink></li>
                    <li><NavLink to="/signup" activeClassName="is-active" exact={true}>Signup</NavLink></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route component={NotFound} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;