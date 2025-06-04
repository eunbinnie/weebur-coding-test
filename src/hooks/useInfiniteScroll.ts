import { useEffect, useRef } from 'react';

interface IUseInfiniteScroll {
  fetchNextPage: () => void;
  hasNextPage: boolean;
  threshold?: number;
}

/**
 * Intersection Observer를 활용한 무한 스크롤 커스텀 훅
 *
 * @param fetchNextPage 다음 페이지를 호출할 콜백 함수
 * @param hasNextPage 추가 데이터를 불러올 수 있는지 여부 (false면 감시 중단)
 * @param threshold 감시 범위 설정 (0~1)
 */
const useInfiniteScroll = ({
  fetchNextPage,
  hasNextPage,
  threshold = 0,
}: IUseInfiniteScroll) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold },
    );

    const refCurrent = observerRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) observer.unobserve(refCurrent);
    };
  }, [fetchNextPage, hasNextPage, threshold]);

  return observerRef;
};

export default useInfiniteScroll;
