"use client";

import PreviewNote from "@/containers/dashboard/preview-note";
import { useAppSelector } from "@/lib/hook";
import { INote } from "@/types";
import { useMemo, useRef } from "react";

// interface Item {
//   id: number;
//   content: string;
// }

export function InfiniteScroll({ noteList }: { noteList: INote[] }) {
  // const [items, setItems] = useState<Item[]>([]);
  // const [page, setPage] = useState(1);
  // const [isFetching, setIsFetching] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const selectedNote = useAppSelector((state) => state.note.selectedNote);

  // const fetchMoreItems = useCallback(async () => {
  //   setIsFetching(true);
  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   const newItems = Array.from({ length: 10 }, (_, i) => ({
  //     id: (page - 1) * 10 + i + 1,
  //     content: `Item ${(page - 1) * 10 + i + 1}`,
  //   }));
  //   setItems((prevItems) => [...prevItems, ...newItems]);
  //   setPage((prevPage) => prevPage + 1);
  //   setIsFetching(false);
  // }, [page]);

  // useEffect(() => {
  //   const options = {
  //     root: containerRef.current,
  //     rootMargin: "0px",
  //     threshold: 1.0,
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     const target = entries[0];
  //     if (target.isIntersecting && !isFetching) {
  //       fetchMoreItems();
  //     }
  //   }, options);

  //   observerRef.current = observer;

  //   return () => {
  //     if (observerRef.current) {
  //       observerRef.current.disconnect();
  //     }
  //   };
  // }, [fetchMoreItems, isFetching]);

  // useEffect(() => {
  //   const currentObserver = observerRef.current;
  //   const triggerElement = document.getElementById("scroll-trigger");

  //   if (currentObserver && triggerElement) {
  //     currentObserver.observe(triggerElement);
  //   }

  //   return () => {
  //     if (currentObserver && triggerElement) {
  //       currentObserver.unobserve(triggerElement);
  //     }
  //   };
  // }, [items]);

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
        className="h-full overflow-y-auto border-none rounded-lg  scrollbar-hide"
      >
        <div className="space-y-4">
          {PreviewNoteList}
          {/* {isFetching && <LoadingPlaceholder />} */}
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
