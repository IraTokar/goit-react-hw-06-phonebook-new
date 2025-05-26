import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const phoneContacts = {
    items: [
        { id: 'id-1', name: 'Albus Dumbledore', number: '3801826499' },
        { id: 'id-2', name: 'Severus Snape', number: '+380974155597' },
        { id: 'id-3', name: 'Minerva McGonagall', number: '+393296436625' },
        { id: 'id-4', name: 'Remus Lupin', number: '3339503124' },
    ]
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState: phoneContacts,
    reducers: {
        addContacts: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
        },
        prepare(newContact) {
            return {
                payload: { id: nanoid(), ...newContact }
            };
        },
        removeContact(state, action) {
            const index = state.items.findIndex(
                contact => contact.id === action.payload
              );
              state.items.splice(index, 1);
        },
    },

});

export const { addContacts, removeContact } = contactSlice.actions;

export const contactReducer = persistReducer(
    { key: 'contacts', storage },
    contactSlice.reducer
)