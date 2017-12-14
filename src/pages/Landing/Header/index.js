// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Import modules
import LoginForm from '../../../containers/LoginForm/index';
import Nav from './Nav';

// ============================================================
// Container

function Header({ links, onLogin, resetPasswordAddress }) {
    return (
        <header>
            <Nav links={links} />
            <LoginForm
                onSubmit={onLogin}
                resetPasswordAddress={resetPasswordAddress}
            />
        </header>
    );
}

Header.propTypes = {
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLogin: PropTypes.func.isRequired,
    resetPasswordAddress: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default Header;
