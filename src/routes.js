import React from 'react';
import { 
    BrowserRouter as Router, Switch, Route 
} from 'react-router-dom';

import LandingPage from './pages/landingPage';
import Home from './pages/home';

function Routes () {
    return (
        <Router>
            <Switch>
                <Route path="/" component={ LandingPage } exact />
                <Route path="/home" component={ Home } />
            </Switch>
        </Router>
    )
}

export default Routes;