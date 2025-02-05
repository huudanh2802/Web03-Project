"use client";

import PreviewNote from "@/containers/dashboard/preview-note";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { INote } from "@/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LoadingPlaceholder } from "./loading-placeholder";
import { noteSlice } from "@/lib/features/noteSlice";
import { QueryStatus } from "@reduxjs/toolkit/query";

export function InfiniteScroll({
  noteList,
  reqStatus,
}: {
  noteList: INote[];
  reqStatus: QueryStatus;
}) {
  const isFetching = reqStatus === "pending";
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const selectedNote = useAppSelector((state) => state.note.selectedNote);

  const dispatch = useAppDispatch();
  const noteValue = useAppSelector((state) => state.note);

  const fetchMoreItems = useCallback(() => {
    if (noteValue.size < noteValue.listSize) {
      dispatch(noteSlice.actions.updateSize(noteValue.size + 5));
    }
  }, [dispatch, noteValue.listSize, noteValue.size]);

  useEffect(() => {
    const options = {
      root: containerRef.current,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching) {
        fetchMoreItems();
      }
    }, options);

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [fetchMoreItems, isFetching]);

  useEffect(() => {
    const currentObserver = observerRef.current;
    const triggerElement = document.getElementById("scroll-trigger");

    if (currentObserver && triggerElement) {
      currentObserver.observe(triggerElement);
    }

    return () => {
      if (currentObserver && triggerElement) {
        currentObserver.unobserve(triggerElement);
      }
    };
  }, [noteValue.previewNoteList]);

  const PreviewNoteList = useMemo(() => {
    return noteList.map((note) => (
      <div key={note.id} className="p-4 rounded">
        <PreviewNote
          previewNote={note}
          selected={selectedNote ? note.id === selectedNote.id : false}
        />
      </div>
    ));
  }, [noteList, selectedNote]);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div
        ref={containerRef}
        className="max-h-[680px] overflow-y-auto border-none rounded-lg scrollbar-hide"
      >
        <div className="space-y-4">
          {PreviewNoteList}
          {isFetching && <LoadingPlaceholder />}
          <div id="scroll-trigger" className="h-1" />
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
}
