import { useCallback, useState } from 'react';
import useFetch from 'use-http';
import { Image } from '../interfaces/image';

export const useImages = () => {
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const { data = [], loading } = useFetch<Image[]>(
    `/images?page=${page}`,
    {
      onNewData: (currImages, { hasMore, pictures }) => {
        setHasMore(hasMore);
        return [...(currImages || []), ...pictures];
      },
      perPage: 10,
    },
    [page]
  );

  const handleLoadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  return {
    data,
    loading,
    hasMore,
    loadMore: handleLoadMore,
  };
};
