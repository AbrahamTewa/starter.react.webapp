// ============================================================
// Imports packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Component

function Input({ title, onkeypress }) {
    return (
        <input
            type="text"
            defaultValue={title}
            onChange={onkeypress}
        />);
}

Input.defaultProps = {
    onkeypress: undefined,
};

Input.propTypes = {
    onkeypress: PropTypes.func,
    title: PropTypes.string.isRequired,
};

// ******************** Export ********************
export default Input;
