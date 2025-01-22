"use client";
import { InfiniteScroll } from "@/components/custom/infinite-scroll-vertical/infinite-scroll-vertical";
import SearchInput from "@/components/custom/search-input";
import { useAppSelector } from "@/lib/hook";
import { INote } from "@/types";

export default function Sidebar() {
  const previewNoteList = useAppSelector((state) => state.note.previewNoteList);
  return (
    <div className="flex flex-col justify-center space-y-4">
      <SearchInput />
      <div className="h-dvh inline-flex flex-nowrap">
        <InfiniteScroll noteList={previewNoteList || []} />
      </div>
    </div>
  );
}
