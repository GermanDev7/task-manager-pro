import ErrorBoundary from "./components/ErrorBoundary";
import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary fallback={<div>Ocurrio un error inesperado</div>}>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);