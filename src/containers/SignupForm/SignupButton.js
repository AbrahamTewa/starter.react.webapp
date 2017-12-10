// ============================================================
// Import packages
import React from 'react';

// ============================================================
// Container

/**
 *
 * @param {function} onClick - Function executed when the button is clicked
 * @returns {React.Component}
 * @constructor
 */
function SignupButton(onClick) {
    return (
        <button
            className="ui secondary basic button"
            onClick={onClick}>
            Sign-up
        </button>
    );
}

// ============================================================
// Exports
export default SignupButton;
