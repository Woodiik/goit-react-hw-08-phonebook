import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue();
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, ThunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return ThunkAPI.rejectWithValue();
  }
});