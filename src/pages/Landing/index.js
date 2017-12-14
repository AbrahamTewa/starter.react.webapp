// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Import modules
import Header from './Header/index';
import Logo from './Logo';
import SignupForm from '../../containers/SignupForm/index';
import Slider from '../../components/Slider';

// ============================================================
// Container

function LandingPage({
    headerLinks,
    logoUrl,
    onLogin,
    onSignUp,
    resetPasswordAddress,
    slides,
    signupTitle,
    signupSubtitle,
    signupHeaderText,
}) {
    return (
        <div className="homepage">
            <Header
                links={headerLinks}
                onLogin={onLogin}
                resetPasswordAddress={resetPasswordAddress}
            />
            <main>
                <Logo url={logoUrl} />
                <Slider slides={slides} />
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

LandingPage.defaultProps = {
    logoUrl: '',
    signupHeaderText: '',
    signupTitle: '',
    signupSubtitle: '',
};

LandingPage.propTypes = {
    headerLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
    logoUrl: PropTypes.string,
    onLogin: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired,
    resetPasswordAddress: PropTypes.string.isRequired,
    // eslint-disable-next-line react/no-typos
    slides: Slider.propTypes.isRequired,
    signupSubtitle: PropTypes.string,
    signupTitle: PropTypes.string,
    signupHeaderText: PropTypes.string,
};

// ============================================================
// Exports
export default LandingPage;
