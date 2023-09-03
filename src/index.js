import React from "react";
import ReactDOM from "react-dom";

import "index.scss";

import Application from "components/Application";

import axios from "axios";

// Netlify
if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

// GitHub Pages
axios.defaults.baseURL = "https://scheduler-api-j729.up.railway.app/"

ReactDOM.render(<Application />, document.getElementById("root"));
