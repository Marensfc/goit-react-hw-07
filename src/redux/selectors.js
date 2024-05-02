import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;
export const selectFilterName = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filterName) => {
    console.log("work");
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterName.toLowerCase());
    });

    return filteredContacts;
  }
);
