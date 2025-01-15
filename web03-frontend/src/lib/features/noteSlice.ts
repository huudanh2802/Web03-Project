import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INote } from "@/types";

// Define a type for the slice state
interface NoteState {
  previewNoteList: INote[] | undefined;
  selectedNote: INote | undefined;
}

// Define the initial state using that type
const initialState: NoteState = {
  previewNoteList: [],
  selectedNote: undefined,
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setPreviewNoteList: (state, action: PayloadAction<INote[] | undefined>) => {
      state.previewNoteList = action.payload;
      state.selectedNote = action.payload ? action.payload[0] : undefined;
    },
    changeSelectedNote: (state, action: PayloadAction<number>) => {
      if (state.previewNoteList) {
        state.selectedNote = state.previewNoteList.find(
          (note) => note.id === action.payload
        );
      }
    },
    updateSelectedNote: (state, action: PayloadAction<string>) => {
      if (state.selectedNote) {
        state.selectedNote = {
          ...state.selectedNote,
          note: action.payload,
        };
        if (state.previewNoteList) {
          state.previewNoteList[state.selectedNote.id] = {
            ...state.selectedNote,
            note: action.payload,
          };
        }
      }
    },
  },
});

export const { setPreviewNoteList, updateSelectedNote, changeSelectedNote } =
  noteSlice.actions;

export default noteSlice.reducer;
