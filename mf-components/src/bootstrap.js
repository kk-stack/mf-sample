import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./App.css";

const el = document.getElementById("components-app");
const root = createRoot(el);
root.render(<App />);