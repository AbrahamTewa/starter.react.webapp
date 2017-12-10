// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Import modules
import LoginForm from '../../LoginForm';
import Logo from './Logo';

// ============================================================
// Container

class Header extends React.Component {
    onLogin(data) {
        this.props.onLogin(data);
    }

    render() {
        let logo;

        if (this.props.logoUrl) {
            logo = <Logo url={this.props.logoUrl} />;
        }

        return (
            <header>
                {logo}
                <LoginForm
                    onSubmit={data => this.onLogin(data)}
                    resetPasswordAddress={this.props.resetPasswordAddress}
                />
            </header>
        );
    }
}

Header.defaultProps = {
    logoUrl: '',
};

Header.propTypes = {
    logoUrl: PropTypes.string,
    onLogin: PropTypes.func.isRequired,
    resetPasswordAddress: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default Header;
