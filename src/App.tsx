import React, { FC, useContext } from "react";
import "css/App.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AppContext } from "context";
import { Redirect, Route, Switch, useLocation } from "react-router";
import Login from "views/login";
import NavBar from "components/navbar";
import Aside from "components/aside";
import Page1 from "views/page1";
import Page2 from "views/page2";
import Page3 from "views/page3";
import { PATHS } from "utils/constants";

const App: FC = () => {
  const { appState } = useContext(AppContext);
  const { pathname } = useLocation();
  return (
    <div className="h-100">
      <header id="header">
        <NavBar />
      </header>
      <article id="article" className="pt-3">
        <Switch>
          {appState.loggedUser ? (
            pathname === PATHS.LOGIN ? (
              <Redirect to="/" />
            ) : (
              <div className="container">
                <Route path="/" exact>
                  <h1>HOME</h1>
                </Route>
                <Route path={PATHS.PAGE1}>
                  <Page1 />
                </Route>
                <Route path={PATHS.PAGE2}>
                  <Page2 />
                </Route>
                <Route path={PATHS.PAGE3}>
                  <Page3 />
                </Route>
              </div>
            )
          ) : (
            <Route path={PATHS.LOGIN}>
              <Login />
            </Route>
          )}
          <Route path="*">
            <Redirect to={appState.loggedUser ? "/" : PATHS.LOGIN} />
          </Route>
        </Switch>
      </article>
      <aside>{appState.loggedUser ? <Aside /> : null}</aside>
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
