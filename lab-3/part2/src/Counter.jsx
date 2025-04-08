import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="d-flex p-2 flex-column align-items-center">
      <div className="btn-group" role="group">
        <button
          type="button"
          className={`btn mb-3 ${i18n.language === 'en' ? 'btn-primary' : 'btn-outline-primary'}`}
          data-testid="en"
          onClick={() => handleLanguageChange('en')}
        >
          English
        </button>
        <button
          type="button"
          className={`btn mb-3 ${i18n.language === 'ru' ? 'btn-primary' : 'btn-outline-primary'}`}
          data-testid="ru"
          onClick={() => handleLanguageChange('ru')}
        >
          Русский
        </button>
      </div>
      <button
        type="button"
        className="btn btn-info mb-3 align-self-center"
        data-testid="counter"
        onClick={handleIncrement}
      >
        {/* {t('clicks', { count })} */}
        {t('clicks_interval', {postProcess: 'interval', count: count})}
      </button>
      <button
        type="button"
        className="btn btn-warning"
        data-testid="reset"
        onClick={handleReset}
      >
        {t('reset')}
      </button>
    </div>
  );
};

export default App
