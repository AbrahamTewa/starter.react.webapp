// ============================================================
// Import packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

// ============================================================
// Import modules
import * as redux from './redux';
import services from './services';
import Router from './Router';

// ============================================================
// Functions

function getInitialState() {
    return {
        app: { title: 'React starter' },
    };
}

/**
 * Initialize the application
 */
async function initialize({ middlewareConf } = {}) {
    redux.configureStore({
        middlewareConf,
        initialState: getInitialState(),
    });

    let domLoadedPromiseFulfill;
    const domLoadedPromise = new Promise(((onfulfill) => {
        domLoadedPromiseFulfill = onfulfill;
    }));

    const i18next = services.i18n.initialize();

    document.addEventListener('DOMContentLoaded', domLoadedPromiseFulfill);
    await domLoadedPromise;

    display({ i18next });
}

function display({ i18next }) {
    const store = redux.getStore();

    const root = document.createElement('div');
    root.setAttribute('id', 'root');

    document.querySelector('body').appendChild(root);

    ReactDOM.render(
        <Provider store={store}>
            <I18nextProvider i18n={i18next}>
                <Router />
            </I18nextProvider>
        </Provider>,
        root,
    );
}

export default { initialize };
