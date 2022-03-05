import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

export const JournalApp = () => {
  return (
    <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
    </React.StrictMode>
  );
};
