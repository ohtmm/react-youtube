import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Youtube from './service/youtube';
import AuthService from './service/auth_service';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
const authService = new AuthService();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube} authService={authService} />
  </React.StrictMode>
);
