import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 🌟 bunu ekle
import './index.css';
import App from './App.jsx';
import './i18n.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>         {/* 🌟 App bileşenini BrowserRouter ile sar */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
