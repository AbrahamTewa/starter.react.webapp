// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Import modules
import LoginForm from '../../../components/LoginForm';
import Nav from './Nav';
import services from '../services';

// ============================================================
// Container

function Header({ links, resetPasswordAddress }) {
    return (
        <header>
            <Nav links={links} />
            <LoginForm
                onLogin={services.loginUser}
                resetPasswordAddress={resetPasswordAddress}
            />
        </header>
    );
}

Header.propTypes = {
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
    resetPasswordAddress: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default Header;
