export const CreatePollRequest = (data: CreatePollRequest) => {
  return fetch("http://localhost:8080/ranked-choice-vote/v1/poll", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "X-USER-ID": "12345", // TODO: Hook up the unique ID for the users here when we start generating those
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());
};

export const UpdatePollRequest = (id: String, data: UdpatePollRequest) => {
  return fetch(`http://localhost:8080/ranked-choice-vote/v1/poll/${id}`, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "X-USER-ID": "12345", // TODO: Hook up the unique ID for the users here when we start generating those
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());
};

export const GetPollRequest: (id: string) => Promise<Poll> = (id) => {
  return fetch(`http://localhost:8080/ranked-choice-vote/v1/poll/${id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "X-USER-ID": "12345", // TODO: Hook up the unique ID for the users here when we start generating those
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((data) => data.json());
};
