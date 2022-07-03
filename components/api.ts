// TODO: move to environment variable
const host = "http://localhost:8080"
// const stagingHost = "https://societyclub-rcv-backend.uc.r.appspot.com"

export const CreatePollRequest = (userID: string, data: CreatePollRequest): Promise<ResponseShape<Poll>> => {
  return fetch(`${host}/ranked-choice-vote/v1/poll`, {
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

export const UpdatePollRequest = (userID: string, id: string, data: UpdatePollRequest): Promise<ResponseShape<Poll>> => {
  return fetch(`${host}/ranked-choice-vote/v1/poll/${id}`, {
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

export const GetPollRequest = (userID: string, id: string): Promise<ResponseShape<Poll>> => {
  return fetch(`/api/v1/poll/${id}`, {
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


export const CreateVote = (userID: string, id: string, data: CreateVoteRequest): Promise<ResponseShape<CreateVoteResponse>> => {
  return fetch(`${host}/ranked-choice-vote/v1/poll/${id}/vote`, {
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


export const GetPollResultsRequest = (userID: string, id: string): Promise<ResponseShape<PollResults>> => {
  return fetch(`${host}/ranked-choice-vote/v1/poll/${id}/results`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': userID,
    },
  }).then((response) => {
    console.log(response);

    const r: ResponseShape<PollResults> = {
      messages: [],
      data: {
        pollId: 'test-do-not-deleto',
        pollName: 'This is a test poll',
        totalEntries: 13,
        totalSteps: 3,
        maxNumRankedChoiceCount: 2,
        winner: 'spoodermann',
        steps: [
          {
            stepId: 0,
            candidateList: [
              {
                name: 'spoodermann',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'spoodermann',
                    voteCount: 3,
                  },
                ],
              },
              {
                name: 'batman',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'batman',
                    voteCount: 4,
                  },
                ],
              },
              {
                name: 'peach',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'peach',
                    voteCount: 3,
                  },
                ],
              },
              {
                name: 'mario',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'mario',
                    voteCount: 2,
                  },
                ],
              },
              {
                name: 'luigi',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'luigi',
                    voteCount: 1,
                  },
                ],
              },
            ],
          },
          {
            stepId: 1,
            candidateList: [
              {
                name: 'spoodermann',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'spoodermann',
                    voteCount: 3,
                  },
                  {
                    firstChoiceCandidate: 'luigi',
                    voteCount: 1,
                  },
                ],
              },
              {
                name: 'batman',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'batman',
                    voteCount: 4,
                  },
                ],
              },
              {
                name: 'peach',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'peach',
                    voteCount: 3,
                  },
                ],
              },
              {
                name: 'mario',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'mario',
                    voteCount: 2,
                  },
                ],
              },
              {
                name: 'luigi',
                eliminated: true,
                votes: [
                  {
                    firstChoiceCandidate: 'luigi',
                    voteCount: 1,
                  },
                ],
              },
            ],
          },
          {
            stepId: 2,
            candidateList: [
              {
                name: 'spoodermann',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'spoodermann',
                    voteCount: 3,
                  },
                  {
                    firstChoiceCandidate: 'luigi',
                    voteCount: 1,
                  },
                  {
                    firstChoiceCandidate: 'mario',
                    voteCount: 2,
                  },
                ],
              },
              {
                name: 'batman',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'batman',
                    voteCount: 4,
                  },
                ],
              },
              {
                name: 'peach',
                eliminated: false,
                votes: [
                  {
                    firstChoiceCandidate: 'peach',
                    voteCount: 3,
                  },
                ],
              },
              {
                name: 'mario',
                eliminated: true,
                votes: [
                  {
                    firstChoiceCandidate: 'mario',
                    voteCount: 2,
                  },
                ],
              },
              {
                name: 'luigi',
                eliminated: true,
                votes: [
                  {
                    firstChoiceCandidate: 'luigi',
                    voteCount: 1,
                  },
                ],
              },
            ],
          },
        ],
        yourEntry: {
          choices: [
            {
              choicePosition: 0,
              candidate: {
                name: 'mario',
              },
            },
            {
              choicePosition: 1,
              candidate: {
                name: 'spoodermann',
              },
            },
          ],
        },
      },
    }
    // Had to do this to match what data.json() typically does since we are hardcoding it here
    return Promise.resolve<any>(r);

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
  // .then((data) => data.json());
};
