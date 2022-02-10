import React, { Component } from 'react';
import { Input } from '../components/Input.jsx';
import { withTranslation } from 'react-i18next';

class UserLogin extends Component {
  state = {
    userName: null,
    password: null,
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { t } = this.props;
    return (
      <div className="container">
        <form>
          <h1 className="text-center">{t('Login')}</h1>
          <Input
            name="userName"
            label={t('User Name')}
            //error={userName}
            onChange={this.onChange}
            type="userName"
          ></Input>
          <Input
            name="password"
            label={t('Password')}
            //error={password}
            onChange={this.onChange}
            type="password"
          ></Input>
          <div className="button">
            <button className="btn btn-primary">{t('Login')}</button>
          </div>
        </form>
      </div>
    );
  }
}

const UserLoginWithTranslation = withTranslation()(UserLogin);
export default UserLoginWithTranslation;
