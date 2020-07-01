import React from 'react';
import logo from './features/reduxDemo/components/ReduxDemo/logo.svg';
import './features/reduxDemo/components/ReduxDemo/ReduxDemo.css';
import { Counter } from './features/reduxDemo/components/Counter/Counter';

export const ReduxDemo = ({ reactConfig }: { reactConfig?: {} }) => {
  console.log({ reactConfig });
  return (
    <div className="ReduxDemo">
      <header className="ReduxDemo-header">
        <img src={logo} className="ReduxDemo-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/ReduxDemo.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="ReduxDemo-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="ReduxDemo-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="ReduxDemo-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="ReduxDemo-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};
export default ReduxDemo;
