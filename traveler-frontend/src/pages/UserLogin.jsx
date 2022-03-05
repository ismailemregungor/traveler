import React, { Component } from 'react';
import { Input } from '../components/Input.jsx';
import { withTranslation } from 'react-i18next';
import { login } from '../services/userService';
import axios from 'axios';
import ButtonWithProgress from '../components/ButtonWithProgress.jsx';

class UserLogin extends Component {
  state = {
    userName: null,
    password: null,
    error: null,
    pendingApiCall: false,
  };

  componentDidMount() {
    axios.interceptors.request.use((request) => {
      this.setState({ pendingApiCall: true });
      return request;
    });

    axios.interceptors.response.use(
      (response) => {
        this.setState({ pendingApiCall: false });
        return response;
      },
      (error) => {
        this.setState({ pendingApiCall: false });
        throw error;
      }
    );
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      error: null,
    });
  };

  onClickLogin = async (event) => {
    event.preventDefault();
    const { userName, password } = this.state;
    const creds = {
      userName,
      password,
    };
    this.setState({
      error: null,
    });
    try {
      await login(creds);
    } catch (apiError) {
      this.setState({
        error: apiError.response.data.message,
      });
    }
  };

  render() {
    const { t } = this.props;

    const { userName, password, error, pendingApiCall } = this.state;

    const buttonEnabled = userName && password;

    return (
      <div className="container">
        <form>
          <h1 className="text-center">{t('Login')}</h1>

          <Input
            name="userName"
            label={t('User Name')}
            onChange={this.onChange}
            type="userName"
          ></Input>

          <Input
            name="password"
            label={t('Password')}
            onChange={this.onChange}
            type="password"
          ></Input>
          <br />

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="button">
            <ButtonWithProgress
              onClick={this.onClickLogin}
              disabled={!buttonEnabled || pendingApiCall}
              pendingApiCall={pendingApiCall}
              text={t('Login')}
            ></ButtonWithProgress>
          </div>
        </form>
      </div>
    );
  }
}

const UserLoginWithTranslation = withTranslation()(UserLogin);
export default UserLoginWithTranslation;
