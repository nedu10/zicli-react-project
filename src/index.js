/* eslint-disable react/no-typos */
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import configureStore from "./Config/ConfigureStore.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
