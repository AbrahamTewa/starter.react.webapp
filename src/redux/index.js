// ============================================================
// Import packages
import {
    compose,
    combineReducers,
    createStore,
    applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';

// ============================================================
// Import modules
import actionReducer from './app';

// ============================================================
// Module constants and variables
const reducers = combineReducers({
    app: actionReducer,
});

let store;

// ============================================================
// Functions
function configureStore({
    middlewareConf,
    initialState,
} = {
        middlewareConf: {
            composer: compose,
            extra: [],
        },
        initialState: {},
    }) {
    const middlewares = [...middlewareConf.extra, thunk];

    store = createStore(
        reducers,
        initialState,
        middlewareConf.composer(applyMiddleware(...middlewares)),
    );
}

function getStore() {
    return store;
}

// ============================================================
// Exports
export { configureStore, getStore };
