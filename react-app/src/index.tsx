import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

declare global {
  interface Window {
    initThemeReact: Function;
  }
}
window.initThemeReact = () => {
  document.querySelectorAll('[data-react-app]').forEach((el) => {
    if (el.innerHTML) {
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
