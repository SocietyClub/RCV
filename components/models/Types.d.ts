type CreatePollRequest = {
  pollName: string;
  maxNumRankedChoiceCount: number;
  candidateList: Array<Candidate>;
};

type UpdatePollRequest = {
  pollOpen?: boolean;
  pollName?: string;
  maxNumRankedChoiceCount?: number;
  candidateList?: Array<Candidate>;
};

type Poll = {
  pollId: string;
  pollOpen: boolean;
  startDate: string;
  endDate: string;
  pollName: string;
  pollDesc: string;
  maxNumRankedChoiceCount: number;
  candidateList: Array<Candidate>;
};

type Candidate = {
  name: string;
};

type PollResults = {
  pollId: string;
  pollName: string;
  totalEntries: number;
  totalSteps: number;
  maxNumRankedChoiceCount: number;
  winner: string;
  steps: Array<ResultStep>;
  yourEntry: ResultYourEntry;
};

type ResultStep = {
  stepId: number;
  candidateList: Array<ResultCandidate>;
};

type ResultCandidate = {
  name: string;
  eliminated: boolean;
  votes: Array<ResultVote>;
};

type ResultVote = {
  firstChoiceCandidate: string;
  voteCount: number;
};

type ResultYourEntry = {
  choices: Array<ResultYourEntryChoice>;
};

type ResultYourEntryChoice = {
  choicePosition: number;
  candidate: Candidate;
};

type fetchDataShape<T> = {
  data: T | null;
  isLoading: boolean;
  messages: any[];
  isSuccess: boolean;
  isInitial: boolean;
};

type ResponseShape<T> = {
  data: T | null;
  messages: any[];
};

type AlertShape = {
  severity: 'error' | 'success' | 'info' | 'warning';
  message: string;
};
