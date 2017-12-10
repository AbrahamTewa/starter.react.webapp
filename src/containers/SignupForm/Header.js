// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Scene
/**
 * Header of the signup form
 * @param {string} [title]    - Title of the form
 * @param {string} [subtitle] - Subtitle of the form
 * @param {string} [text]     - Text to display bellow the title
 * @returns {React.Component}
 * @constructor
 * @public
 */
function Header({ title, subtitle, text }) {
    return (
        <header>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{text}</p>
        </header>);
}

Header.defaultProps = {
    subtitle: '',
    text: '',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    text: PropTypes.string,
};

// ============================================================
// Exports
export default Header;
