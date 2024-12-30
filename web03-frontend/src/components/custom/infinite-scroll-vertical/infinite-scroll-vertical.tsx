'use client'

import React, { useState, useCallback, useRef } from 'react';
import { useInfiniteScroll } from './useInfiniteScroll';

interface Item {
  id: number;
  title: string;
}

const InfiniteScrollVertical: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const fetchItems = useCallback(async () => {
    // Simulating an API call
    const newItems = Array.from({ length: 10 }, (_, i) => ({
      id: items.length + i + 1,
      title: `Item ${items.length + i + 1}`
    }));
    setItems(prevItems => [...prevItems, ...newItems]);
    setPage(prevPage => prevPage + 1);
    setIsFetching(false);
  }, [items.length]);

  const { isFetching, setIsFetching } = useInfiniteScroll(fetchItems);

  const lastItemRef = useCallback((node: HTMLDivElement) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isFetching) {
        fetchItems();
      }
    });
    if (node) observerRef.current.observe(node);
  }, [fetchItems, isFetching]);

  return (
    <div className="w-full h-[calc(100vh-8rem)] overflow-hidden">
      <div
        id="scroll-container"
        className="h-full overflow-y-auto space-y-4 p-4 scrollbar-hide"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            ref={index === items.length - 1 ? lastItemRef : null}
            className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center scroll-snap-align-start"
          >
            <p className="text-xl font-semibold">{item.title}</p>
          </div>
        ))}
        {isFetching && (
          <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-xl font-semibold">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfiniteScrollVertical;

