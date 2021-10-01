export const CreatePollRequest = (data: Object) => {
  return fetch('http://localhost:8080/ranked-choice-vote/v1/poll', { 
    method: 'POST',
    mode: 'no-cors', // TODO: Too lazy to figure out cors right now :(
    headers: {
      'Content-Type': 'application/json',
      'X-USER-ID': '12345' // TODO: Hook up the unique ID for the users here when we start generating those
    },
    body: JSON.stringify(data)})
}
