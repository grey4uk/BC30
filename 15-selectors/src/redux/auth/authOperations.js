// import { loaderOff, loaderOn, setUser } from './authSlice';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from 'services/firebase.config';
import { createAsyncThunk } from '@reduxjs/toolkit';

const provider = new GoogleAuthProvider();

// export const authByGoogle = () => async (dispatch) => {
//   try {
//     dispatch(loaderOn());
//     const { user } = await signInWithPopup(auth, provider);
//     dispatch(loaderOff());
//     dispatch(setUser(user));
//   } catch (error) {}
// };
export const authByGoogle = createAsyncThunk(
  'auth/google_auth',
  async (_, thunkAPI) => {
    try {
      const { user } = await signInWithPopup(
        auth,
        provider
      );
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
