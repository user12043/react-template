import React, { FC, useContext } from "react";
import "css/App.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AppContext } from "context";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
    <div className="h-100 bg-dark bg-gradient">
      <header id="header">
        <NavBar />
      </header>
      <article id="article" className="pt-3">
        <section className="container h-100">
          <Routes>
            {appState.loggedUser ? (
              pathname === PATHS.LOGIN ? (
                <Route path={PATHS.LOGIN} element={<Navigate to="/" />} />
              ) : (
                <>
                  <Route path="/" element={<h1>HOME</h1>}></Route>
                  <Route path={PATHS.PAGE1} element={<Page1 />}></Route>
                  <Route path={PATHS.PAGE2} element={<Page2 />}></Route>
                  <Route path={PATHS.PAGE3} element={<Page3 />}></Route>
                </>
              )
            ) : (
              <Route path={PATHS.LOGIN} element={<Login />}></Route>
            )}
            <Route
              path="*"
              element={
                <Navigate to={appState.loggedUser ? "/" : PATHS.LOGIN} />
              }
            ></Route>
          </Routes>
        </section>
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
