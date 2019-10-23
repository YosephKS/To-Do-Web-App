import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './App';
import Home from './Home';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

const routing = (
    <Router>
        <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/dashboard/:username" component = {App} />
            <Route component = {NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
