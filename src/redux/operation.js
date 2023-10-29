import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get(
        'https://653d32f6f52310ee6a99fb6f.mockapi.io/contacts'
      );

      return contacts.data;
    } catch (error) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async ({ id, name }, { rejectWithValue }) => {
    try {
      const contact = await axios.delete(
        `https://653d32f6f52310ee6a99fb6f.mockapi.io/contacts/${id}`
      );
      toast(`${name} has deleted`, toast.warn);
      return contact.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const contact = await axios.post(
        'https://653d32f6f52310ee6a99fb6f.mockapi.io/contacts',
        newContact
      );
      toast.success(`${newContact.name} add to phonebook`, {
        duration: 2000,
        position: 'top-left',
      });
      return contact.data;
    } catch (error) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(error.message);
    }
  }
);
