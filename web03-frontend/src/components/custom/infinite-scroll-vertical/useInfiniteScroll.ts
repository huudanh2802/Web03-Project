import { useState, useEffect, useCallback } from 'react'

export function useInfiniteScroll(callback: () => void) {
  const [isFetching, setIsFetching] = useState(false)

  const handleScroll = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting && !isFetching) {
      setIsFetching(true)
    }
  }, [isFetching])

  useEffect(() => {
    if (!isFetching) return
    callback()
  }, [isFetching, callback])

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 1.0 })
    const element = document.getElementById('scroll-trigger')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [handleScroll])

  return { isFetching, setIsFetching }
}

