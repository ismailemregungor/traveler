import React from 'react';
import { signUp } from '../services/userService';
import { Input } from '../components/Input.jsx';

class SignUp extends React.Component {
  render() {
    const { pendingApiCall, errors } = this.state;
    const { displayName, userName, password, passwordRepeat } = errors;
    return (
      <div className="container">
        <form>
          <h1 className="text-center">Sign Up</h1>

          <Input
            name="displayName"
            label="Display Name"
            error={displayName}
            onChange={this.onChange}
            type="displayName"
          ></Input>

          <Input
            name="userName"
            label="User Name"
            error={userName}
            onChange={this.onChange}
            type="userName"
          ></Input>

          <Input
            name="password"
            label="Password"
            error={password}
            onChange={this.onChange}
            type="password"
          ></Input>

          <Input
            name="passwordRepeat"
            label="Password Repeat"
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
              Sign Up
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
    errors[name] = undefined;
    if (name === 'password' || 'passwordRepeat') {
      if (name === 'password' && value !== this.state.passwordRepeat) {
        errors.passwordRepeat = 'Password mismatch';
      } else if (name === 'passwordRepeat' && value !== this.state.password) {
        errors.passwordRepeat = 'Password mismatch';
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

export default SignUp;
