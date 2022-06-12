import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BASE_URL} from '../../../app/Api';
import {postRequest} from '../../../app/fetch';

const initialState = {
  userData: {},
  status: '',
  error: '',
};

// postRequest
export const userSignup = createAsyncThunk('userSignup', async body => {
  let data = postRequest(`${BASE_URL}/todos`, body);
  return data;
});

export const userSignin = createAsyncThunk('SignInData', () => {
  let data = postRequest(`${BASE_URL}/todos/1`, body);
  return data;
});

const AuthReducer = createSlice({
  name: 'AuthReducer',
  initialState,
  reducers: {
    signinFromAsyncStorage: (state, action) => {
      state.userData = action.payload;
      state.status = 'ok';
      state.error = 'none';
    },
    removeSigninFromAsyncStorage: (state, action) => {
      state.userData = {};
    },
  },
  extraReducers: {
    [userSignup.pending]: (state, action) => {
      state.status = 'pending';
    },
    [userSignup.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
    [userSignup.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.status = 'ok';
      state.error = 'none';
    },
    [userSignin.pending]: (state, action) => {
      state.status = 'pending';
    },
    [userSignin.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
    [userSignin.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.status = 'ok';
      state.error = 'none';
    },
  },
});

export default AuthReducer.reducer;
export const {signinFromAsyncStorage, removeSigninFromAsyncStorage} =
  AuthReducer.actions;
