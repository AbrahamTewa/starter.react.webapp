// ============================================================
// Import packages
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// ============================================================
// Scene

function ResetPasswordLink({ link }) {
    return (
        <Link to={link}>Reset password</Link>
    );
}

ResetPasswordLink.propTypes = {
    link: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default ResetPasswordLink;
