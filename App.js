import React from 'react';
import {Provider} from 'react-redux';
import store from './src/config/reduxStore';
import Router from './src/config/routes/router';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
