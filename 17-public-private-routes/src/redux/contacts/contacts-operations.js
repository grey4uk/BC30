import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsAxiosInstance } from 'services/axios-instance';

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAxiosInstance.get(
        '/contacts'
      );
      console.log('contacts :>> ', contacts);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
