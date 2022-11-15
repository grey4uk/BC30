import { createAsyncThunk } from '@reduxjs/toolkit';

import { ref, onValue, set } from 'firebase/database';
import {
  userEmailSelector,
  userNameSelector,
} from 'redux/selectors';
import { db } from 'services/firebase.config';
import { setChat } from './chatSlice';

const handleChatListening = (snapshot, dispatch) => {
  const data = snapshot.val();
  const preparedData = Object.entries(data).map(
    ([id, value]) => ({ ...value, id })
  );
  dispatch(setChat(preparedData));
};

export const getChat = createAsyncThunk(
  'chat/get_chat',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const starCountRef = ref(db, 'chat/');
      const res = onValue(starCountRef, (snapshot) =>
        handleChatListening(snapshot, dispatch)
      );
      console.log('res :>> ', res);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendMessage = createAsyncThunk(
  'chat/send_message',
  async (message, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const username = userNameSelector(state);
      const email = userEmailSelector(state);
      const id = Number(Math.random().toFixed(5)) * 100000;
      const createdAt = Date.now();
      const res = await set(ref(db, `chat/${id}`), {
        username,
        email,
        message,
        createdAt,
      });
      console.log('res :>> ', res);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
