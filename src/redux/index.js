import { combineReducers, createStore } from 'redux';
import actionReducer from './actions';
import { routerReducer } from 'react-router-redux';

// ******************** Global variables and constants ********************
const reducers = combineReducers( {
    action: actionReducer,
    routing: routerReducer} );

let store;

// ******************** Functions ********************
function configureStore(initialState = {}) {
    store = createStore(reducers, initialState);
}

function getStore() {
    return store;
}

// ******************** Exports ********************
export { configureStore, getStore};
