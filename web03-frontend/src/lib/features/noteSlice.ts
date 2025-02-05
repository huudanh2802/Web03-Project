import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INote, IViewNote } from "@/types";

// Define a type for the slice state
interface NoteState {
  previewNoteList: INote[] | undefined;
  selectedNote: INote | undefined;
  keyword: string;
  listSize: number;
  size: number;
}

// Define the initial state using that type
const initialState: NoteState = {
  previewNoteList: [],
  selectedNote: undefined,
  keyword: "",
  listSize: 0,
  size: 7,
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setPreviewNoteList: (
      state,
      action: PayloadAction<IViewNote | undefined>
    ) => {
      state.previewNoteList = action.payload?.notes;
      state.listSize = action.payload?.size ?? 0;
      state.selectedNote = action.payload ? action.payload.notes[0] : undefined;
    },
    updateSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
    updateKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    changeSelectedNote: (state, action: PayloadAction<number>) => {
      if (state.previewNoteList) {
        state.selectedNote = state.previewNoteList.find(
          (note) => note.id === action.payload
        );
      }
    },
    addNewNote: (state, action: PayloadAction<INote>) => {
      state.previewNoteList?.unshift(action.payload);
      state.selectedNote = action.payload;
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.previewNoteList = state.previewNoteList?.filter(
        (note) => note.id !== action.payload
      );
      if (state.selectedNote?.id === action.payload) {
        state.selectedNote = undefined;
      }
    },
    updateSelectedNote: (state, action: PayloadAction<string>) => {
      if (state.selectedNote) {
        state.selectedNote = {
          ...state.selectedNote,
          note: action.payload,
        };
        if (state.previewNoteList) {
          const index = state.previewNoteList.findIndex(
            (note) => note.id === state.selectedNote?.id
          );
          if (index !== -1) {
            state.previewNoteList[index] = {
              ...state.selectedNote,
              note: action.payload,
            };
          }
        }
      }
    },
  },
});

export const {
  setPreviewNoteList,
  updateSelectedNote,
  changeSelectedNote,
  addNewNote,
  removeNote,
  updateKeyword,
  updateSize,
} = noteSlice.actions;

export default noteSlice.reducer;
