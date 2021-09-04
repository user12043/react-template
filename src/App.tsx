import React, { FC, useContext } from "react";
import logo from "img/logo.svg";
import "css/App.scss";
import { AppContext } from "context";

const App: FC = () => {
  const { appState } = useContext(AppContext);
  return (
    <div className="App">
      <header className="App-header">
        <h1>App version: {appState.version}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
