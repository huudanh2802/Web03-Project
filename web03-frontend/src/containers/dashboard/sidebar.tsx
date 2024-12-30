"use client";
import SearchInput from "@/components/custom/search-input/search-input";
import { IPreviewNote } from "@/interfaces";
import { useState } from "react";
import PreviewNote from "./preview-note";

export default function Sidebar() {
  const testPreviewNote: IPreviewNote[] = [
    {
      id: 1,
      date: new Date(),
      note: "In Deep copy, an object is...",
    },
    {
      id: 2,
      date: new Date(),
      note: "In Deep copy, an object is...",
    },
    {
      id: 3,
      date: new Date(),
      note: "In Deep copy, an object is...",
    },
    {
      id: 4,
      date: new Date(),
      note: "In Deep copy, an object is...",
    },
    {
      id: 5,
      date: new Date(),
      note: "In Deep copy, an object is...",
    },
    {
      id: 6,
      date: new Date(),
      note: "In Deep copy, an object is...",
    },
    {
      id: 7,
      date: new Date(),
      note: "In Deep copy, an object is...",
    },
  ];

  const [previewNoteList, setPreviewNoteList] =
    useState<IPreviewNote[]>(testPreviewNote);

  return (
    <div className="flex flex-col justify-center space-y-4">
      <SearchInput />
      <div className="h-full inline-flex flex-nowrap">
        </div>?
      <li className="list-none overflow-auto		">
        {previewNoteList.map((previewNote) => (
          <ul key={previewNote.id}>
            <PreviewNote previewNote={previewNote} />
          </ul>
        ))}
      </li>
    </div>
  );
}
