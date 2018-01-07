// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Component
function Name({ name }) {
    return (
        <div className="profileName">{name}</div>
    );
}

Name.propTypes = {
    name: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default Name;
