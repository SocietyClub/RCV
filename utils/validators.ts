import { createMessage } from './utils';
import { Severity } from '../models/Enums';

export function validatePollParams (body: CreatePollRequest | UpdatePollRequest): Array<ErrorMessage> {
    let pollErrors: Array<ErrorMessage> = [];
    if (body.maxNumRankedChoiceCount > body.candidateList.length) {
      pollErrors.push(
        createMessage(Severity.ERROR, 'Request Param issue - Poll could not be updated', 'maxNumRankedChoiceCount can not be higher than number of candidates')
      );
    }
    if (body.candidateList.some((candidate: Candidate) => candidate.name === '')) {
      pollErrors.push(
        createMessage(Severity.ERROR, 'Request Param issue - Poll could not be updated', 'candidate name cannot be empty')
      );
    }
    return pollErrors
}

