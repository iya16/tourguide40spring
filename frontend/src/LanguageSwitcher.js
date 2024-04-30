import React from 'react';
import i18n from './i18n';  // Direct import of the i18n instance

function LanguageSwitcher() {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
    </div>
  );
}

export default LanguageSwitcher;