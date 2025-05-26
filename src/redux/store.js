import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";


export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterReducer
    }
});

export const persistor = persistStore(store);