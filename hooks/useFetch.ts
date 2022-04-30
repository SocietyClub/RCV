import { useState } from 'react';
import { useUserID } from './useUserID';

type promiseType<T> = (...arg: any[]) => Promise<T>;
type responseType = ResponseShape<dataType>;
type dataType = Poll; // This will need to change when we add in getting Votes. I am sick of trying to make this generic :(

const emptyFetchData: fetchDataShape<dataType> = {
  data: null,
  messages: [],
  isLoading: false,
  isSuccess: false,
  isInitial: true,
};

export const useFetch: (fetchFunction: promiseType<responseType>) => [fetchDataShape<dataType>, promiseType<fetchDataShape<dataType>>] = (fetchFunction) => {
  const [response, setResponse] = useState(emptyFetchData);

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
        return data;
      });
  };

  return [response, fetchMethod];
};
