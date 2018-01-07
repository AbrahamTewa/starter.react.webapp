// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Container

/**
 *
 * @param {function} onClick - Function executed when the button is clicked
 * @returns {React.Component}
 * @constructor
 */
function SignupButton({ enabled, onSignUp }) {
    return (
        <button
            className="ui secondary basic button"
            disabled={!enabled}
            onClick={onSignUp}
        >
            Sign-up
        </button>
    );
}

SignupButton.defaultProps = {
    enabled: true,
};

SignupButton.propTypes = {
    enabled: PropTypes.bool,
    onSignUp: PropTypes.func.isRequired,
};

// ============================================================
// Exports
export default SignupButton;
