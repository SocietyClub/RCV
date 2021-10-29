export const CreatePollRequest = (userID: string, data: CreatePollRequest) => {
  return fetch("http://localhost:8080/ranked-choice-vote/v1/poll", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "X-USER-ID": userID,
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());
};

export const UpdatePollRequest: (
  userID: string,
  id: String,
  data: UpdatePollRequest
) => Promise<ResponseShape<Poll>> = (userID, id, data) => {
  return fetch(`http://localhost:8080/ranked-choice-vote/v1/poll/${id}`, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "X-USER-ID": userID,
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());
};

export const GetPollRequest: (
  userID: string,
  id: string
) => Promise<ResponseShape<Poll>> = (userID, id) => {
  return fetch(`http://localhost:8080/ranked-choice-vote/v1/poll/${id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "X-USER-ID": userID,
    },
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((data) => data.json());
};
