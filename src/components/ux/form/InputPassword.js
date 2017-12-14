// ============================================================
// Import packages
import PropTypes from 'prop-types';
import React from 'react';
// ============================================================
// Import containers

import InputText from './InputText';

// ============================================================
// Scene

class InputPassword extends React.Component {
    /**
     * Return the password
     * @returns {string}
     * @public
     */
    getValue() {
        return this.inputText.getValue();
    }

    render() {
        return (
            <InputText
                enabled={this.props.enabled}
                formName="password"
                label="Password"
                onChange={this.props.onChange}
                refs={(ref) => {
                    this.inputText = ref;
                }}
            />
        );
    }
}

InputPassword.defaultProps = {
    enabled: true,
    onChange: undefined,
};

InputPassword.propTypes = {
    enabled: PropTypes.bool,
    onChange: PropTypes.func,
};

// ============================================================
// Exports
export default InputPassword;
