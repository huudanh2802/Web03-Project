"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { noteSlice } from "@/lib/features/noteSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { Pen, Trash } from "lucide-react";
import { useState } from "react";

export default function Note() {
  const selectedNote = useAppSelector((state) => state.note.selectedNote);
  const dispatch = useAppDispatch();
  return (
    <div className="m-4">
      <div className="flex justify-between">
        <Button variant="ghost">
          <Trash color="red" />
        </Button>
        <Button variant="ghost">
          <Pen color="#3471FF" />
        </Button>
      </div>
      <div className="mt-12 mx-4">
        {/* <Input className="bg-transparent border-none ring-offset-none h-lvh outline-none" value={testString} /> */}
        <Textarea
          value={selectedNote?.note}
          onChange={(value) =>
            dispatch(noteSlice.actions.updateSelectedNote(value.target.value))
          }
        />
      </div>
    </div>
  );
}
