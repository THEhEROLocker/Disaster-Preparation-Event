import React from 'react';
import { Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import App from './containers/App'
import MapComponent from './components/MapComponent'
import Default from './components/Default'

export default function createRoutes(store, history){
    return ( 
    <Router history={history}>
        <App>
            <Route exact path="/" component={Default}></Route>
            <Route path="/blank" component={MapComponent}></Route>
        </App>
    </Router>
    );
};