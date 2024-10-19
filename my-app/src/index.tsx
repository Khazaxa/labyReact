import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './Layout/App';
import { GlobalStyle } from './Styles/GlobalStyle';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
