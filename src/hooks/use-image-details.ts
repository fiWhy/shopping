import { useCallback, useEffect, useState } from 'react';
import useFetch from 'use-http';
import { ImageDetails } from '../interfaces/image';

export const useImageDetails = (id: string) => {
  const [data, setData] = useState<ImageDetails | null>(null);

  const { get } = useFetch('/images');

  const handleRequestImageDetails = useCallback(
    async (id: string) => {
      const data: ImageDetails = await get(`/${id}`);
      setData(data);
    },
    [get]
  );

  const handleRenewImageDetails = useCallback(() => {
    handleRequestImageDetails(id);
  }, [id, handleRequestImageDetails]);

  useEffect(() => {
    handleRenewImageDetails();
  }, [handleRenewImageDetails]);

  return {
    data,
    renew: handleRenewImageDetails,
  };
};
