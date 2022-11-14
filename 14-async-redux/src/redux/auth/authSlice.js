import { createSlice } from '@reduxjs/toolkit';
import { authByGoogle, logOut } from './authOperations';

const pending = (state) => {
  state.loading = true;
  state.error = '';
};

const reject = (state, { payload }) => {
  state.error = payload;
  state.loading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    loading: false,
    error: '',
  },
  //   reducers: {
  //     loaderOn: (state) => {
  //       state.loading = true;
  //     },
  //     loaderOff: (state) => {
  //       state.loading = false;
  //     },
  //     setUser: (state, { payload }) => {
  //       state.user = payload;
  //     },
  //   },
  extraReducers:
    //   {
    //     [authByGoogle.fulfilled]: (state, action) => state,
    //   },
    (builder) =>
      builder
        .addCase(authByGoogle.pending, pending)
        .addCase(
          authByGoogle.fulfilled,
          (state, { payload }) => {
            state.user = payload;
            state.loading = false;
            state.isLoggedIn = true;
          }
        )
        .addCase(authByGoogle.rejected, reject)
        .addCase(logOut.pending, pending)
        .addCase(logOut.fulfilled, (state) => {
          state.loading = false;
          state.isLoggedIn = false;
          state.user = null;
        })
        .addCase(logOut.rejected, reject),
});
export default authSlice.reducer;
// export const { loaderOn, loaderOff, setUser } =
//   authSlice.actions;
