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

class InputPassword extends React.Component {
    /**
     * Return the password
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
                        formName="password"
                        label={t('login.userPassword')}
                        onChange={this.props.onChange}
                        ref={(ref) => {
                            this.inputText = ref;
                        }}
                        type="password"
                    />)
                }
            </I18n>
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
