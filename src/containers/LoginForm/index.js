// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';
// ============================================================
// Import containers

import InputLogin from '../../components/ux/form/InputLogin';
import InputPassword from '../../components/ux/form/InputPassword';
import SignupButton from './SignupButton';
import LoginButton from './LoginButton';
import ResetPasswordLink from './ResetPasswordLink';

// ============================================================
// Container

/**
 * Callback called when the form is submitted.
 * It's expected to return a promise that will be resolved once the
 * login has been checked.
 *
 * @callback LoginFormOnSubmit
 *
 * @param {LoginFormData} data
 * @returns {Promise.<LoginFormResult>}
 */

/**
 * @typedef {Object} LoginFormData
 * @property {string} login
 * @property {string} password
 */

/**
 * @typedef {Object} LoginFormResult
 * @property {string}  errorMessage
 * @property {boolean} success
 */

/**
 * Login form
 */
class LoginForm extends React.Component {
    /**
     *
     * @param {Object} props
     * @param {Object} props.onSubmit
     */
    constructor(props) {
        super(props);

        this.state = { enabled: true };
    }

    /**
     *
     * @returns {Promise}
     * @private
     */
    async onSubmit(event) {
        event.preventDefault();
        this.disable();

        try {
            await this.props.onSubmit(this.getData());
        }
        finally {
            this.enable();
        }
    }

    /**
     * @private
     */
    onSignUp() {
        this.disable();
        this.props.onSignUp();
    }

    /**
     *
     * @returns {LoginFormData}
     * @private
     */
    getData() {
        return {
            login: this.inputLogin.getValue(),
            password: this.inputPassword.getValue(),
        };
    }

    /**
     * Enable the form
     * @public
     */
    enable() {
        this.toggleEnable(true);
    }

    /**
     * Disable the form
     * @public
     */
    disable() {
        this.toggleEnable(false);
    }

    /**
     * Toggle the enable state
     * @param {boolean} [enabled] - If defined, then will force the enable state
     * @return {boolean} Return the previous enabled state
     * @public
     */
    toggleEnable(enabled) {
        const previousState = !this.state.enabled;

        this.setState({
            enabled: typeof enabled === 'undefined' ? enabled : !previousState,
            ...this.state,
        });

        return previousState;
    }

    render() {
        let signupButton;

        if (this.props.onSignUp) {
            signupButton = (<SignupButton
                enabled={this.state.enabled}
            />);
        }

        return (
            <form onSubmit={() => this.onSubmit()}>
                <InputLogin
                    enabled={this.state.enabled}
                    refs={(ref) => {
                        this.inputLogin = ref;
                    }}
                />
                <InputPassword
                    enabled={this.state.enabled}
                    refs={(ref) => {
                        this.inputPassword = ref;
                    }}
                />
                {signupButton}
                <LoginButton
                    enabled={this.state.enabled}
                />
                <ResetPasswordLink link={this.props.resetPasswordAddress} />
            </form>);
    }
}

LoginForm.defaultProps = {
    onSignUp: undefined,
};

LoginForm.propTypes = {
    onSignUp: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    resetPasswordAddress: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default LoginForm;
