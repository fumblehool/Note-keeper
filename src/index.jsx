import ReactDOM from 'react-dom';
import React from 'react';

// Redux
import { Provider } from 'react-redux';
import configureStore from './stores/index.jsx';

import App from './components/app.jsx';

// React-Router
import { BrowserRouter } from 'react-router-dom';

//css
import './sass/app.scss';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </Provider>,
  document.getElementById('app'),
);
