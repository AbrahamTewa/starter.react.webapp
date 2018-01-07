// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Component
function Avatar({ src }) {
    return (
        <img
            className="avatar"
            alt="avatar"
            src={src}
        />
    );
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default Avatar;
