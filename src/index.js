import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { loadGtag } from './gtag';
import reportWebVitals from "./reportWebVitals";

// Load Google Analytics (reads REACT_APP_GA_ID from environment)
loadGtag();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();