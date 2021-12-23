export const CreatePollRequest = (userID: string, data: CreatePollRequest) => {
  return fetch('http://localhost:8080/ranked-choice-vote/v1/poll', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then(
          (data) =>
            Promise.reject({
              data: null,
              messages: [],
            })
          // TODO: It should probably be this but the backend is not returning errors nicely for 404s and etc.
          // Promise.reject({
          //   data: data.data,
          //   messages: data.messages,
          // })
        );
      }
      return response;
    })
    .then((data) => data.json());
};

export const UpdatePollRequest: (userID: string, id: String, data: UpdatePollRequest) => Promise<ResponseShape<Poll>> = (userID, id, data) => {
  return fetch(`http://localhost:8080/ranked-choice-vote/v1/poll/${id}`, {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then(
          (data) =>
            Promise.reject({
              data: null,
              messages: [],
            })
          // TODO: It should probably be this but the backend is not returning errors nicely for 404s and etc.
          // Promise.reject({
          //   data: data.data,
          //   messages: data.messages,
          // })
        );
      }
      return response;
    })
    .then((data) => data.json());
};

export const GetPollRequest: (userID: string, id: string) => Promise<ResponseShape<Poll>> = (userID, id) => {
  return fetch(`http://localhost:8080/ranked-choice-vote/v1/poll/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID,
    },
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then(
          (data) =>
            Promise.reject({
              data: null,
              messages: [],
            })
          // TODO: It should probably be this but the backend is not returning errors nicely for 404s and etc.
          // Promise.reject({
          //   data: data.data,
          //   messages: data.messages,
          // })
        );
      }
      return response;
    })
    .then((data) => data.json());
};
