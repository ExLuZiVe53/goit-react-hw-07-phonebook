import {
  createSlice,
  // nanoid
} from '@reduxjs/toolkit';
// import { Notify } from 'notiflix';
import { fetchContacts, addContact, removeContact } from './operation.js';

const InitialState = { items: [], isLoading: false, error: null };

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const handleRemoveFulfilled = (state, action) => {
  const index = state.items.findIndex(contact => contact.id === action.payload.id);
  state.items.splice(index, 1);
  state.isLoading = false;
  // Notify.warning(`${action.payload.name.toUpperCase()} remove from phonebook`);
};
const handleAddContactFulfilled = (state, action) => {
  state.items.push(action.payload);
  state.isLoading = false;
  // Notify.success(`${action.payload.name.toUpperCase()} add to phonebook`);
};
const contactsSlise = createSlice({
  name: 'contacts',
  initialState: InitialState,
    
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(removeContact.fulfilled, handleRemoveFulfilled)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.rejected, handleRejected),
});

// Експортуємо генератори екшенів та редюсер
// export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
