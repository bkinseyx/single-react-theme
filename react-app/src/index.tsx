import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';

declare global {
  interface Window {
    initThemeReact: () => void;
    reactAutoInit: boolean;
  }
}
window.initThemeReact = async () => {
  const App = (await import('./App')).default;

  document.querySelectorAll('[data-react-app]').forEach((el) => {
    // hot module replacement needs to be able to overwrite the div
    if (process.env.NODE_ENV !== 'development' && el.innerHTML) {
      return;
    }
    const reactApp = el.getAttribute('data-react-app');
    const rawReactConfig = el.getAttribute('data-react-config');
    const reactConfig = rawReactConfig ? JSON.parse(rawReactConfig) : {};
    if (!reactApp) {
      return;
    }
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App reactApp={reactApp} reactConfig={reactConfig} />
        </Provider>
      </React.StrictMode>,
      el
    );
  });
};

if (window.reactAutoInit) {
  window.initThemeReact();
  window.reactAutoInit = false;
}

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', window.initThemeReact);
}
