type CreatePollRequest = {
  pollName: string;
  maxNumRankedChoiceCount: number;
  candidateList: Array<Candidate>;
}

type UdpatePollRequest = {
  pollOpen?: boolean;
  pollName?: string;
  maxNumRankedChoiceCount?: number;
  candidateList?: Array<Candidate>;
}

type Poll = {
  pollId: string;
  pollOpen: boolean;
  startDate: string;
  endDate: string;
  pollName: string;
  pollDesc: string;
  maxNumRankedChoiceCount: number;
  candidateList: Array<Candidate>;
}

type Candidate = {
  name: string;
}
