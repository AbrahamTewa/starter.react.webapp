// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Container

/**
 *
 * @param {string} url - URL of the image
 * @returns {React.Component}
 * @constructor
 */
function Logo({ url }) {
    return (
        <img
            alt="logo"
            src={url}
            className="logo"
        />
    );
}

Logo.propTypes = {
    url: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default Logo;
