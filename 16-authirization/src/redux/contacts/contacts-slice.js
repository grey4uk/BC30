import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './contacts-operations';

const initialState = {
  items: [],
  error: '',
  loader: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) =>
    builder.addCase(
      getContacts.fulfilled,
      (state, { payload }) => {}
    ),
});
export default contactsSlice.reducer;
