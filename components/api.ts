// TODO: move to environment variable
const host = 'http://localhost:8080';
// const stagingHost = "https://societyclub-rcv-backend.uc.r.appspot.com"

export const CreatePollRequest = (userID: string, data: CreatePollRequest): Promise<ResponseShape<Poll>> => {
  return fetch(`/api/v1/poll`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID,
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data =>
          Promise.reject({
            data: data.data,
            messages: data.messages,
          })
        );
      }
      return response;
    })
    .then(data => data.json());
};

export const UpdatePollRequest = (userID: string, id: string, data: UpdatePollRequest): Promise<ResponseShape<null>> => {
  return fetch(`/api/v1/poll/${id}`, {
    method: 'PATCH',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID,
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data =>
          Promise.reject({
            data: data.data,
            messages: data.messages,
          })
        );
      }
      return response;
    })
    .then(data => data.json());
};

export const GetPollRequest = (userID: string, id: string): Promise<ResponseShape<Poll>> => {
  return fetch(`/api/v1/poll/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID,
    },
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data =>
          Promise.reject({
            data: data.data,
            messages: data.messages,
          })
        );
      }
      return response;
    })
    .then(data => data.json());
};

export const GetVote = (userID: string, id: string): Promise<ResponseShape<GetVoteResponse>> => {
  return fetch(`/api/v1/poll/${id}/vote`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID,
    },
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data =>
          Promise.reject({
            data: data.data,
            messages: data.messages,
          })
        );
      }
      return response;
    })
    .then(data => data.json());
};

export const CreateVote = (userID: string, id: string, data: CreateVoteRequest): Promise<ResponseShape<CreateVoteResponse>> => {
  return fetch(`/api/v1/poll/${id}/vote`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID,
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data =>
          Promise.reject({
            data: data.data,
            messages: data.messages,
          })
        );
      }
      return response;
    })
    .then(data => data.json());
};

export const GetPollResultsRequest = (userID: string, id: string): Promise<ResponseShape<PollResults>> => {
  return fetch(`/api/v1/poll/${id}/results`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID,
    },
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data =>
          Promise.reject({
            data: data.data,
            messages: data.messages,
          })
        );
      }
      return response;
    })
    .then(data => data.json());
};
