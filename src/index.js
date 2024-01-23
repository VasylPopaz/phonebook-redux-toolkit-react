import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStyle } from 'styles/GlobalStyle.styled';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from 'state/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </>
);
