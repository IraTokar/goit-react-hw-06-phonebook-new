import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE,PAUSE, PERSIST,PURGE,REGISTER } from "redux-persist";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";


export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterReducer
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

export const persistor = persistStore(store);