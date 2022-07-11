import { useState } from 'react';
import { useUserID } from './useUserID';

type promiseType<T> = (...arg: any[]) => Promise<T>;

const emptyFetchData = {
  data: null,
  messages: [],
  isLoading: false,
  isSuccess: false,
  isInitial: true,
};

export function useFetch<T>(fetchFunction: promiseType<ResponseShape<T>>): [fetchDataShape<T>, promiseType<fetchDataShape<T>>] {
  const [response, setResponse] = useState<fetchDataShape<T>>(emptyFetchData);

  const userID = useUserID();

  const fetchMethod = (...args: any[]) => {
    setResponse({ ...emptyFetchData, isLoading: true, isInitial: false });

    return fetchFunction(String(userID), ...args)
      .then((res) => {
        const data = {
          data: res.data,
          messages: res.messages,
          isLoading: false,
          isSuccess: true,
          isInitial: false,
        }
        setResponse(data);
        return data;
      })
      .catch((res) => {
        const data = {
          data: res.data,
          messages: res.messages,
          isLoading: false,
          isSuccess: false,
          isInitial: false,
        }
        setResponse(data);
        return Promise.reject(data);
      });
  };

  return [response, fetchMethod];
};
