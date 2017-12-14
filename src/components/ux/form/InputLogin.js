// ============================================================
// Import packages
import PropTypes from 'prop-types';
import React from 'react';
// ============================================================
// Import containers

import InputText from './InputText';

// ============================================================
// Scene

class InputLogin extends React.Component {
    /**
     * Return the login
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
                formName="login"
                label="Login"
                onChange={this.props.onChange}
                refs={(ref) => {
                    this.inputText = ref;
                }}
            />
        );
    }
}

InputLogin.defaultProps = {
    enabled: true,
    onChange: undefined,
};

InputLogin.propTypes = {
    enabled: PropTypes.bool,
    onChange: PropTypes.func,
};

// ============================================================
// Exports
export default InputLogin;
