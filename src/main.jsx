import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // 👉 importing App component
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* 👉 using App component here */}
  </React.StrictMode>
);
