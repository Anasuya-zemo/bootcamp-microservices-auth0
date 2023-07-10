import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {domain , clientId} from './utils/constants'
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Auth0Provider domain="dev-zwjckb4kylq63mkn.us.auth0.com" clientId="sdMD6FXsrVen0Blokp9ZWW1rZgNWFidU" redirectUri={window.location.origin} >
    <App />
  </Auth0Provider>,
);
