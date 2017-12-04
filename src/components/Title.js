import React from 'react';
import PropTypes from 'prop-types';

/**
 * Title of the application
 * @param {string} children
 * @returns {XML}
 * @constructor
 */
function Title({children}) {
    return <h1>{children}</h1>;
}

Title.propTypes = { children: PropTypes.string };

export default Title;

