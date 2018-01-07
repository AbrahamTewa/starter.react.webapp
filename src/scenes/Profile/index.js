// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Import components
import ProfileInfo from './ProfileInfo';

// ============================================================
// Component
function Profile({ avatarUrl, name }) {
    return (
        <div>
            <ProfileInfo name={name} avatarUrl={avatarUrl} />
        </div>
    );
}


Profile.defaultProps = {};

Profile.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default Profile;
