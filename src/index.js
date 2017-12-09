// ============================================================
// Import packages
import React    from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// ============================================================
// Import modules
import { configureStore, getStore} from './redux';
import App from './scenes/App';
import Authentication from './scenes/Authentication';

// ============================================================
// Module constants and variables

const browserHistory = createBrowserHistory();

// ============================================================
// Functions
/**
 * Initialize the application
 */
function initialize() {
    configureStore({action: {title: 'React starter'}});

    // Add the reducer to your store on the `routing` key
    const store = getStore();

    const root = document.createElement('div');
    root.setAttribute('id', 'root');

    document.querySelector('body').appendChild(root);

    ReactDOM.render(
        <Provider store={store}>
            <Router history={browserHistory}>
                <div>
                    <Route exact path="/" component={ App } />
                    <Route path="/login" component={ Authentication }/>
                </div>
            </Router>
        </Provider>,
        root
    );
}

document.addEventListener('DOMContentLoaded', initialize);
