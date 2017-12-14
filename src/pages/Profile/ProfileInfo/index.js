// ============================================================
// Import packages
import PropTypes from 'prop-types';
import React from 'react';

// ============================================================
// Import components
import Avatar from './Avatar';
import Name from './Name';

// ============================================================
// Component
function ProfileInfo({ avatarUrl, name }) {
    return (
        <aside>
            <Name name={name} />
            <Avatar src={avatarUrl} />
        </aside>
    );
}

ProfileInfo.defaultProps = {};

ProfileInfo.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default ProfileInfo;
