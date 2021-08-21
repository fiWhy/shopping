import { useCallback, useEffect, useState } from 'react';
import useFetch from 'use-http';
import { LOCAL_STORAGE_TOKEN } from '../constants';

export const useToken = (apiKey: string) => {
  const [token, setToken] = useState('');
  const { post } = useFetch('/auth');

  const handleRequestAndUpdateToken = useCallback(async () => {
    const { token: receivedToken } = await post({
      apiKey,
    });

    localStorage.setItem(LOCAL_STORAGE_TOKEN, receivedToken);
    setToken(receivedToken);
  }, [post, apiKey]);

  useEffect(() => {
    const currentToken = localStorage.getItem(LOCAL_STORAGE_TOKEN);
    if (!currentToken) {
      handleRequestAndUpdateToken();
    } else {
      setToken(currentToken);
    }
  }, [handleRequestAndUpdateToken]);

  return {
    token,
    renew: handleRequestAndUpdateToken,
  };
};
