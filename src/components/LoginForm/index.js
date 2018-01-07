// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';
// ============================================================
// Import containers

import InputLogin from './InputLogin';
import InputPassword from './InputPassword';
import SignupButton from './SignupButton';
import ResetPasswordLink from './ResetPasswordLink';
import LoginButton from './LoginButton';

// ============================================================
// Container
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

        this.state = {
            enabled: true,
            loginButtonEnabled: false,
        };
        this.refreshLoginButtonState = this.refreshLoginButtonState.bind(this);
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
            await this.props.onLogin(this.getData());
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
            login: this.getLogin(),
            password: this.getPassword(),
        };
    }

    /**
     * @private
     */
    getLogin() {
        return this.inputLogin.getValue();
    }

    /**
     * @private
     */
    getPassword() {
        return this.inputPassword.getValue();
    }

    /**
     * Disable the form
     * @public
     */
    disable() {
        this.toggleEnable(false);
    }

    /**
     * Enable the form
     * @public
     */
    enable() {
        this.toggleEnable(true);
    }

    /**
     *
     * @returns {boolean}
     * @private
     */
    refreshLoginButtonState() {
        this.setState({
            ...this.state,
            loginButtonEnabled: this.getLogin().length > 5 && this.getPassword().length > 7,
        });
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
            ...this.state,
            enabled: typeof enabled !== 'undefined' ? enabled : !previousState,
        });

        return previousState;
    }

    render() {
        let signupButton;

        if (typeof this.props.onSignUp !== 'undefined') {
            signupButton = (<SignupButton
                onSignUp={this.props.onSignUp}
            />);
        }

        return (
            <div>
                <ResetPasswordLink link={this.props.resetPasswordAddress} />
                <form onSubmit={event => this.onSubmit(event)}>
                    <InputLogin
                        onChange={this.refreshLoginButtonState}
                        ref={(ref) => {
                            this.inputLogin = ref;
                        }}
                    />
                    <InputPassword
                        onChange={this.refreshLoginButtonState}
                        ref={(ref) => {
                            this.inputPassword = ref;
                        }}
                    />
                    {signupButton}
                    <LoginButton
                        enabled={this.state.loginButtonEnabled}
                    />
                </form>
            </div>);
    }
}

LoginForm.defaultProps = {
    onSignUp: undefined,
};

LoginForm.propTypes = {
    onSignUp: PropTypes.func,
    onLogin: PropTypes.func.isRequired,
    resetPasswordAddress: PropTypes.string.isRequired,
};

// ============================================================
// Exports
export default LoginForm;

// ============================================================
// JsDoc
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
