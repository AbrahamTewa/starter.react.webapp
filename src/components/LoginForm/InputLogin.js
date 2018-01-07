// ============================================================
// Import packages
import PropTypes from 'prop-types';
import React from 'react';
import { I18n } from 'react-i18next';
// ============================================================
// Import containers

import InputText from '../ux/form/InputText';

// ============================================================
// Scene
/**
 * @property {InputText} inputText
 */
class InputLogin extends React.Component {
    /**
     * Return the login
     * @returns {string}
     * @public
     */
    getValue() {
        return this.inputText.getValue() || '';
    }

    render() {
        return (
            <I18n ns="form">
                { t =>
                    (<InputText
                        enabled={this.props.enabled}
                        formName="login"
                        label={t('login.userLogin')}
                        onChange={this.props.onChange}
                        ref={(ref) => {
                            this.inputText = ref;
                        }}
                    />)
                }
            </I18n>
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
