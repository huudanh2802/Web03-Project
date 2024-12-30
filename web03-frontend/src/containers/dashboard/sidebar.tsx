"use client";
import { INote } from "@/interfaces";
import { InfiniteScroll } from "@/components/custom/infinite-scroll-vertical/infinite-scroll-vertical";
import SearchInput from "@/components/custom/search-input";

export default function Sidebar({
  previewNoteList,
}: {
  previewNoteList: INote[];
}) {
  
  return (
    <div className="flex flex-col justify-center space-y-4">
      <SearchInput />
      <div className="h-dvh inline-flex flex-nowrap">
        <InfiniteScroll noteList={previewNoteList} />
      </div>
    </div>
  );
}
