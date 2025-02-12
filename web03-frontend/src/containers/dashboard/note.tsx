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
import { useCallback, useRef, useState } from "react";
import { debounce } from "lodash";
import { Editor } from "@tinymce/tinymce-react";

export default function Note() {
  const selectedNote = useAppSelector((state) => state.note.selectedNote);
  const { data: session } = useSession();
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

  const editorRef = useRef<unknown | null>(null);

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
      {selectedNote && (
        <>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            onInit={(_evt, editor) => (editorRef.current = editor)}
            value={selectedNote ? selectedNote.note : ""}
            onEditorChange={(content) => {
              debouncedUpdateNote(selectedNote!.id, content);
              dispatch(noteSlice.actions.updateSelectedNote(content));
            }}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; background-color:#1e1e1e; color:#ffffff; }",
              skin: "oxide-dark",
              content_css: "dark",
              statusbar: false,
            }}
          />
        </>
      )}
    </div>
  );
}
