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
