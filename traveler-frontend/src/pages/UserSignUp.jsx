import React from 'react';
import { signUp } from '../services/userService';
import { Input } from '../components/Input.jsx';
import { withTranslation } from 'react-i18next';

class UserSignUp extends React.Component {
  render() {
    const { pendingApiCall, errors } = this.state;
    const { displayName, userName, password, passwordRepeat } = errors;
    const { t } = this.props;
    return (
      <div className="container">
        <form>
          <h1 className="text-center">{t('Sign Up')}</h1>

          <Input
            name="displayName"
            label={t('Display Name')}
            error={displayName}
            onChange={this.onChange}
            type="displayName"
          ></Input>

          <Input
            name="userName"
            label={t('User Name')}
            error={userName}
            onChange={this.onChange}
            type="userName"
          ></Input>

          <Input
            name="password"
            label={t('Password')}
            error={password}
            onChange={this.onChange}
            type="password"
          ></Input>

          <Input
            name="passwordRepeat"
            label={t('Password Repeat')}
            error={passwordRepeat}
            onChange={this.onChange}
            type="password"
          ></Input>

          <div className="button">
            <button
              className="btn btn-primary"
              onClick={this.onClickSignUp}
              disabled={pendingApiCall || passwordRepeat !== undefined}
            >
              {pendingApiCall && (
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              {t('Sign Up')}
            </button>
          </div>
        </form>
      </div>
    );
  }

  state = {
    userName: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    pendingApiCall: false,
    errors: {},
  };

  onChange = (event) => {
    const { name, value } = event.target;
    const errors = { ...this.state };
    const { t } = this.props;
    errors[name] = undefined;
    if (name === 'password' || 'passwordRepeat') {
      if (name === 'password' && value !== this.state.passwordRepeat) {
        errors.passwordRepeat = t('Password mismatch');
      } else if (name === 'passwordRepeat' && value !== this.state.password) {
        errors.passwordRepeat = t('Password mismatch');
      } else {
        errors.passwordRepeat = undefined;
      }
    }
    this.setState({
      [name]: value,
      errors,
    });
  };

  onClickSignUp = async (event) => {
    event.preventDefault();

    const { displayName, userName, password } = this.state;

    const body = {
      displayName,
      userName,
      password,
    };
    this.setState({
      pendingApiCall: true,
    });

    try {
      const response = await signUp(body);
    } catch (error) {
      if (error.response.data.validationErrors) {
        this.setState({ errors: error.response.data.validationErrors });
      }
    }
    this.setState({ pendingApiCall: false });
  };
}

const UserSignUpWithTranslation = withTranslation()(UserSignUp);
export default UserSignUpWithTranslation;
