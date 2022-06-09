import React from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './src/config/reduxStore';
import {signinFromAsyncStorage} from './src/config/reduxStore/Reducers/AuthReducer';
import Router from './src/config/routes/router';
import {getDataFromAsyncStorage} from './src/utils/AsyncStorageServices';

const Authentication = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(`this is state`, state);
  React.useEffect(() => {
    (async () => {
      let user = await getDataFromAsyncStorage('userData').then(res => {
        console.log('res ', res);
        if (res?.userId) {
          console.log('res in if ', res);
          dispatch(signinFromAsyncStorage(res));
        }
      });
    })().catch(error => console.log('error', error));
  }, []);
  return null;
};
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Authentication />
        <Router />
      </Provider>
    </>
  );
};

export default App;
