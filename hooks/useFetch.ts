import { useState } from "react";
import { useUserID } from "./useUserID";

type promiseType<T> = (...arg: any[]) => Promise<T>;
type responseType = ResponseShape<dataType>;
type dataType = Poll; // This will need to change when we add in getting Votes. I am sick of trying to make this generic :(

const emptyFetchData: fetchDataShape<dataType> = {
  data: null,
  messages: [],
  isLoading: false,
  isSuccess: false,
};

export const useFetch: (
  fetchFunction: promiseType<responseType>
) => [fetchDataShape<dataType>, promiseType<void>] = (fetchFunction) => {
  const [response, setResponse] = useState(emptyFetchData);

  const userID = useUserID();

  const fetchMethod = (...args: any[]) => {
    setResponse(emptyFetchData);

    return fetchFunction(String(userID), ...args)
      .then((res) => {
        setResponse({
          data: res.data,
          messages: res.messages,
          isLoading: false,
          isSuccess: true,
        });
      })
      .catch((res) => {
        setResponse({
          data: res.data,
          messages: res.messages,
          isLoading: false,
          isSuccess: false,
        });
      });
  };

  return [response, fetchMethod];
};
