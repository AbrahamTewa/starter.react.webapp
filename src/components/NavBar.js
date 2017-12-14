// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Component
function NavBar({ children }) {
    return (
        <nav>
            {children}
        </nav>
    );
}

NavBar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

// ============================================================
// Exports
export default NavBar;
