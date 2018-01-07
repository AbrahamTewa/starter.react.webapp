// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

// ============================================================
// Component

function LoginButton({ enabled, t }) {
    return (
        <button
            disabled={!enabled}
            className="ui primary basic button"
            type="submit"
        >
            {t('login.loginButton')}
        </button>);
}

LoginButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired,
};

// ============================================================
// Exports
export default translate('form')(LoginButton);
