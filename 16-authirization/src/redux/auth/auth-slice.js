import { createSlice } from '@reduxjs/toolkit';
import { signUpUser } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  loading: false,
  error: '',
  isLoggedIn: false,
};

const handlePending = (state) => {
  state.loading = true;
  state.error = '';
};

const handleError = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(
        signUpUser.fulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.loading = false;
          state.isLoggedIn = true;
        }
      )
      .addCase(signUpUser.pending, handlePending)
      .addCase(signUpUser.rejected, handleError),
});

export default authSlice.reducer;
