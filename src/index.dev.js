/* eslint-disable import/no-extraneous-dependencies */
import logger from 'redux-logger';

import main from './main';

// noinspection JSIgnoredPromiseFromCall
main.initialize({
    middlewareConf: {
        extra: [logger],
        // eslint-disable-next-line no-underscore-dangle
        composer: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
    },
});
