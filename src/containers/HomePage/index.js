// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Import modules
import Header from './Header';
import SignupForm from '../SignupForm';

// ============================================================
// Container

function HomePage({
    logoUrl,
    onLogin,
    onSignUp,
    resetPasswordAddress,
    signupTitle,
    signupSubtitle,
    signupHeaderText,
}) {
    return (
        <div className="homepage">
            <Header
                logoUrl={logoUrl}
                onLogin={onLogin}
                resetPasswordAddress={resetPasswordAddress}
            />
            <main>
                <SignupForm
                    onSignUp={onSignUp}
                    title={signupTitle}
                    subtitle={signupSubtitle}
                    headerText={signupHeaderText}
                />
            </main>
        </div>
    );
}

HomePage.defaultProps = {
    logoUrl: '',
    signupHeaderText: '',
    signupTitle: '',
    signupSubtitle: '',
};

HomePage.propTypes = {
    logoUrl: PropTypes.string,
    onLogin: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired,
    resetPasswordAddress: PropTypes.string.isRequired,
    signupSubtitle: PropTypes.string,
    signupTitle: PropTypes.string,
    signupHeaderText: PropTypes.string,
};

// ============================================================
// Exports
export default HomePage;
