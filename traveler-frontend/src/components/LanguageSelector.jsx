import React from 'react';
import { withTranslation } from 'react-i18next';
import { changeLanguage } from '../services/userService';

const LanguageSelector = (props) => {
  const onChangeLanguage = (language) => {
    const { i18n } = props;
    i18n.changeLanguage(language);
    changeLanguage(language);
  };
  return (
    <div className="container">
      <img
        src="https://flagcdn.com/tr.svg"
        width="30"
        alt="TR"
        onClick={() => onChangeLanguage('tr')}
        style={{ cursor: 'pointer' }}
      ></img>
      <img
        src="https://flagcdn.com/gb.svg"
        width="30"
        alt="EN"
        onClick={() => onChangeLanguage('en')}
        style={{ cursor: 'pointer' }}
      ></img>
    </div>
  );
};

export default withTranslation()(LanguageSelector);
