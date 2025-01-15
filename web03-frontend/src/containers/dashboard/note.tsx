"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { noteSlice } from "@/lib/features/noteSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import {
  useCreateEmptyNoteByUserMutation,
  useDeleteNoteByIdMutation,
  useUpdateNoteMutation,
} from "@/routes/note/note";
import { Pen, Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import { debounce } from "lodash";

export default function Note() {
  const selectedNote = useAppSelector((state) => state.note.selectedNote);
  const { data: session, status } = useSession();
  const userId = session?.user?.id?.toString();
  const dispatch = useAppDispatch();

  const [createNote] = useCreateEmptyNoteByUserMutation();
  const [deleteNote] = useDeleteNoteByIdMutation();
  const [updateNote] = useUpdateNoteMutation();
  const debouncedUpdateNote = useCallback(
    debounce(async (id: number, note: string) => {
      const updatedNote = await updateNote({
        id,
        note,
      }).unwrap();
      dispatch(noteSlice.actions.updateSelectedNote(updatedNote.note));
    }, 500),
    []
  );
  return (
    <div className="m-4">
      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={async () => {
            const res = await deleteNote(
              selectedNote ? selectedNote?.id : -1
            ).unwrap();
            dispatch(noteSlice.actions.removeNote(selectedNote!.id));
          }}
        >
          <Trash color="red" />
        </Button>
        <Button
          variant="ghost"
          onClick={async () => {
            const newNote = await createNote(userId ? userId : "").unwrap();
            dispatch(noteSlice.actions.addNewNote(newNote));
          }}
        >
          <Pen color="#3471FF" />
        </Button>
      </div>
      <div className="mt-12 mx-4">
        {/* <Input className="bg-transparent border-none ring-offset-none h-lvh outline-none" value={testString} /> */}
        <Textarea
          value={selectedNote?.note}
          onChange={(e) => {
            const value = e.target.value;
            debouncedUpdateNote(selectedNote!.id, value);
            dispatch(noteSlice.actions.updateSelectedNote(value));
          }}
        />
      </div>
    </div>
  );
}
