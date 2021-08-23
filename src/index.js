import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./state";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { ConnectedApp } from "./ui/index";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ConnectedApp/>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
