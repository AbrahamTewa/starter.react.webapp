// ============================================================
// Import packages
import Link from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Import modules
import NavBar from '../../../components/NavBar';

// ============================================================
// Container

/**
 *
 * @param {string[]} links - List of links to display
 * @returns {React.Component}
 * @constructor
 */
function Nav({ links }) {
    const linkComponents = links.map(link => <Link url={link} />);

    return (
        <NavBar>
            {linkComponents}
        </NavBar>
    );
}

Nav.propTypes = {
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// ============================================================
// Exports
export default Nav;
