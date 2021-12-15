import React from 'react';
import { signUp } from '../services/userService';

class SignUp extends React.Component {
  render() {
    const { pendingApiCall } = this.state;
    return (
      <div className="container">
        <form>
          <h1 className="text-center">Sign Up</h1>
          <div className="form-group">
            <label>Display Name</label>
            <input
              className="form-control"
              name="displayName"
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Username</label>
            <input
              className="form-control"
              name="userName"
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="form-control"
              name="password"
              type="password"
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Password Repeat</label>
            <input
              className="form-control"
              name="passwordRepeat"
              type="password"
              onChange={this.onChange}
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={this.onClickSignUp}
              disabled={pendingApiCall}
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
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onClickSignUp = async (event) => {
    event.preventDefault();

    const { displayName, userName, passwod } = this.state;

    const body = {
      displayName,
      userName,
      passwod,
    };
    this.setState({
      pendingApiCall: true,
    });

    try {
      const response = await signUp(body);
    } catch (error) {}
    this.setState({ pendingApiCall: false });
  };
}

export default SignUp;
