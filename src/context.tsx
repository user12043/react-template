import React, { FC, useReducer } from "react";

type AppState = {
  version: string;
};

const initialState: AppState = {
  version: process?.env?.REACT_APP_VERSION || "undefined-version"
};

type AppDispatch = React.Dispatch<any>;

type AppContextValue = {
  appState: AppState;
  appDispatch: AppDispatch;
};

const initialAppContextValue = {
  appState: initialState,
  appDispatch: () => null
};

export const AppContext = React.createContext<AppContextValue>(
  initialAppContextValue
);

const appReducer = (state: AppState, action: any) => {
  return state;
};

export const AppContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ appState: state, appDispatch: dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
