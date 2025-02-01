import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./features/noteSlice";
import { noteAPI } from "@/routes/note/note";

export const store = configureStore({
  reducer: {
    note: noteReducer,
    [noteAPI.reducerPath]: noteAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteAPI.middleware),
});

// Infer the type of makeStore
export type RootState = ReturnType<typeof store.getState>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
