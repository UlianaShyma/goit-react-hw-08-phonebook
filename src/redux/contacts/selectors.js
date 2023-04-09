import { createSelector } from '@reduxjs/toolkit';

export const selectContactsItem = state => state.contacts.items;

export const selectIsLoadingContacts = state => state.contacts.isLoading;

export const selectContactsError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContactsItem, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);
