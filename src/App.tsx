import React, { FC, useContext } from "react";
import "css/App.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AppContext } from "context";
import { Redirect, Route, Switch, useLocation } from "react-router";
import Login from "views/login";
import NavBar from "components/navbar";

const App: FC = () => {
  const { appState } = useContext(AppContext);
  const { pathname } = useLocation();
  return (
    <div className="h-100">
      <header id="header">
        <NavBar />
      </header>
      <article id="article">
        <Switch>
          {appState.loggedUser ? (
            pathname === "/login" ? (
              <Redirect to="/" />
            ) : (
              <Route path="/">
                <h1>APP</h1>
              </Route>
            )
          ) : (
            <Route path="/login">
              <Login />
            </Route>
          )}
          <Route path="*">
            <Redirect to={appState.loggedUser ? "/" : "/login"} />
          </Route>
        </Switch>
      </article>
      <footer>
        <div className="fixed-bottom fs-6 text-end">
          <small>
            <code>version: {appState.version}</code>
          </small>
        </div>
      </footer>
    </div>
  );
};

export default App;
