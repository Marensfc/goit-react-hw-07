import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addMatcher(
        isPending(fetchContacts, addContact, deleteContact),
        state => {
          state.items = [];
          state.loading = true;
        }
      )
      .addMatcher(
        isFulfilled(fetchContacts, addContact, deleteContact),
        (state, action) => {
          state.loading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addMatcher(
        isRejected(fetchContacts, addContact, deleteContact),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
