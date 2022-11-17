import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  contactsAxiosInstance,
  token,
} from 'services/axios-instance';

export const signUpUser = createAsyncThunk(
  'auth/sign_up',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await contactsAxiosInstance.post(
        '/users/signup',
        user
      );
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh_user',
  async (_, { rejectWithValue, getState }) => {
    try {
      const currentToken = getState().auth.token;
      token.set(currentToken);

      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
