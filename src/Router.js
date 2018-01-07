// ============================================================
// Import packages
import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// ============================================================
// Import modules
import LandingPage from './scenes/Landing';

// ============================================================
// Module constants and variables

const browserHistory = createBrowserHistory();

function AppRouter() {
    return (
        <Router history={browserHistory}>
            <div>
                <Route exact path="/" component={LandingPage} />
            </div>
        </Router>
    );
}

export default AppRouter;
