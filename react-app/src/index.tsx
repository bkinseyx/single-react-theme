import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

document.querySelectorAll('[data-react-app]').forEach((el) => {
  const reactApp = el.getAttribute('data-react-app');
  const reactConfig = JSON.parse(el.getAttribute('data-react-config') ?? '');
  if (!reactApp) {
    return;
  }
  console.log({ reactApp });
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App reactApp={reactApp} reactConfig={reactConfig} />
      </Provider>
    </React.StrictMode>,
    el
  );
});
