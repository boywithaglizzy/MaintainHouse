import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { reportWebVitals } from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
  <App />
  // </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
