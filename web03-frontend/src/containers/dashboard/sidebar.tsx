"use client";
import { InfiniteScroll } from "@/components/custom/infinite-scroll-vertical/infinite-scroll-vertical";
import SearchInput from "@/components/custom/search-input";
import { noteSlice } from "@/lib/features/noteSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { INote } from "@/types";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { debounce } from "lodash";
import { useCallback } from "react";

export default function Sidebar({ reqStatus }: { reqStatus: QueryStatus }) {
  const previewNoteList = useAppSelector((state) => state.note.previewNoteList);
  const dispatch = useAppDispatch();
  const debouncedDispatch = useCallback(
    debounce((value: string) => {
      dispatch(noteSlice.actions.updateKeyword(value));
    }, 300),
    [dispatch]
  );
  return (
    <div className="flex flex-col justify-center space-y-4">
      <SearchInput onChange={debouncedDispatch} />
      <div className=" h-dvh inline-flex flex-nowrap">
        <InfiniteScroll
          noteList={previewNoteList || []}
          reqStatus={reqStatus}
        />
      </div>
    </div>
  );
}
