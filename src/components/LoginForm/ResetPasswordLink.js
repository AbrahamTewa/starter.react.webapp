// ============================================================
// Import packages
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

// ============================================================
// Scene
function ResetPasswordLink({ link, t }) {
    return (
        <Link to={link}>{t('login.resetPassword')}</Link>
    );
}

ResetPasswordLink.propTypes = {
    link: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
};

// ============================================================
// Exports
export default translate('form')(ResetPasswordLink);
