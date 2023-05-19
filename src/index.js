import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);