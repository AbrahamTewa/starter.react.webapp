// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Import modules
import Header from './Header';
import urls from '../../urls';
import Logo from './Logo';
import services from './services';

import SignupForm from '../../components/SignupForm';
import Slider from '../../components/Slider';

// ============================================================
// Container
function Landing({
    headerLinks,
    logoUrl,
    slides,
}) {
    return (
        <div className="homepage">
            <Header
                links={headerLinks}
                resetPasswordAddress={urls.RESET_PASSWORD}
            />
            <main>
                <Logo url={logoUrl} />
                <Slider {...slides} />
                <SignupForm
                    onSignUp={services.signupMember}
                />
            </main>
        </div>
    );
}

Landing.defaultProps = {
    headerLinks: [],
    logoUrl: '',
    slides: { slides: [] },
};

Landing.propTypes = {
    headerLinks: PropTypes.arrayOf(PropTypes.string),
    logoUrl: PropTypes.string,
    // eslint-disable-next-line react/no-typos
    slides: PropTypes.shape(Slider.propTypes),
};

// ============================================================
// Exports
export default Landing;
