// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

// ============================================================
// Component
/**
 *
 * @param {function} onClick - Function executed when the button is clicked
 * @returns {React.Component}
 * @constructor
 */
function SignupButton({ enabled, onSignUp, t }) {
    return (
        <button
            className="ui secondary basic button"
            disabled={!enabled}
            onClick={onSignUp}
        >
            {t('login.signup')};
        </button>
    );
}

SignupButton.defaultProps = {
    enabled: true,
};

SignupButton.propTypes = {
    enabled: PropTypes.bool,
    onSignUp: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
};

// ============================================================
// Exports
export default translate('form')(SignupButton);
