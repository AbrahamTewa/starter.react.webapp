// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

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
@translate(['Page.Landing'])
class Header extends React.Component {
    render() {
        const { t } = this.props;

        return (
            <header>
                <h1>{t('header.title')}</h1>
                <h2>{t('header.subtitle')}</h2>
                <p>{t('header.text')}</p>
            </header>);
    }
}

Header.propTypes = {
    t: PropTypes.func.isRequired,
};

// ============================================================
// Exports
export default Header;
