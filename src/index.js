import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.scss";
import "./index.css";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <div className="z-[999]">
        <ScrollToTop />
      </div>
      <App />
    </BrowserRouter>
  </React.Fragment>
);
