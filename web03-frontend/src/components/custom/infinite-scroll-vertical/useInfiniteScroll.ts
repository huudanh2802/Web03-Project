import { useState, useEffect, useCallback } from "react";

export function useInfiniteScroll(loadMore: () => void) {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollContainer = document.getElementById("scroll-container");
    if (!scrollContainer) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
    if (scrollHeight - (scrollTop + clientHeight) < 200) {
      setIsFetching(true);
    }
  }, []);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) return;
    loadMore();
  }, [isFetching, loadMore]);

  return { isFetching, setIsFetching };
}
