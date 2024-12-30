import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./features/note/noteSlice";

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
})

// Infer the type of makeStore
export type RootState = ReturnType<typeof store.getState>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch


