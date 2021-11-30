import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";

const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider);
};

ReactDOM.render(
    <Web3ReactProvider getLibrary={getLibrary}>
        <App />
    </Web3ReactProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
