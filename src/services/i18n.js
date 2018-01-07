// ============================================================
// Import module
import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

// ============================================================
// Module constants and variables

const i18nextOptions = {
    backend: {
        // your backend server supports multiloading
        // /locales/resources.json?lng=de+en&ns=ns1+ns2
        // set loadPath: '/locales/resources.json?lng={{lng}}&ns={{ns}}' to adapt to multiLoading
        allowMultiLoading: false,

        // allow cross domain requests
        crossDomain: false,

        // path where resources get loaded from, or a function
        // returning a path:
        // function(lngs, namespaces) { return customPath; }
        // the returned path will interpolate lng, ns if provided like giving a static path
        loadPath: '/api/i18n/locales/{{lng}}/{{ns}}.json',

        // allow credentials on cross domain requests
        withCredentials: false,
    },

    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    lng: 'dev',
    debug: true,
    ns: ['form', 'page.landing'],

    react: {
        wait: true,
    },
};

// ============================================================
// Functions
function initialize() {
    i18next
        .use(XHR)
        .use(reactI18nextModule)
        .init(i18nextOptions);

    return i18next;
}

// ============================================================
// Exports
export default {
    // =====
    // Action creators
    initialize,
};
