// ============================================================
// Import packages
import PropTypes from 'prop-types';
import React from 'react';
// ============================================================
// Import containers

import InputText from './InputText';

// ============================================================
// Scene

class InputEmail extends React.Component {
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
                type="email"
            />
        );
    }
}

InputEmail.defaultProps = {
    enabled: true,
    onChange: undefined,
};

InputEmail.propTypes = {
    enabled: PropTypes.bool,
    onChange: PropTypes.func,
};

// ============================================================
// Exports
export default InputEmail;
