// ============================================================
// Import packages
import React from 'react';
import PropTypes from 'prop-types';

// ============================================================
// Scene

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.initialValue,
        };
    }

    onChange(event) {
        this.setState({ value: event.target.value });

        if (this.props.onChange) {
            this.props.onChange(this);
        }
    }

    /**
     * Return the login
     * @returns {string}
     * @public
     */
    getValue() {
        return this.state.value;
    }

    render() {
        return (
            <label className="field">
                {this.props.label}
                <input
                    disabled={!this.props.enabled}
                    name={this.props.formName}
                    onChange={e => this.onChange(e)}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    type={this.props.type}
                />
            </label>);
    }
}

InputText.defaultProps = {
    enabled: true,
    initialValue: '',
    label: '',
    onChange: undefined,
    placeholder: '',
    type: 'text',
};

InputText.propTypes = {
    enabled: PropTypes.bool,
    initialValue: PropTypes.string,
    label: PropTypes.string,
    formName: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.oneOf(['email', 'password', 'text']),
};

// ============================================================
// Exports
export default InputText;
