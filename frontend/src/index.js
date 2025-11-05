import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ For React 18+
import { BrowserRouter, HashRouter } from "react-router-dom"; // or HashRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Correct way in React 18
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
