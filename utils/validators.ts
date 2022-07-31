import { createMessage } from './utils';
import { Severity } from '../models/Enums';

export function validatePollParams (body: CreatePollRequest | UpdatePollRequest): Array<ErrorMessage> {
    let pollErrors: Array<ErrorMessage> = [];
    if (body.pollName.length == 0) {
      pollErrors.push(
        createMessage(Severity.ERROR, 'Request Param issue - Poll could not be updated', 'Poll name cannot be empty')
      );
    }
    if (body.maxNumRankedChoiceCount > body.candidateList.length) {
      pollErrors.push(
        createMessage(Severity.ERROR, 'Request Param issue - Poll could not be updated', 'Number of ranked choices cannot be higher than number of candidates')
      );
    }
    if (body.candidateList.length == 0) {
      pollErrors.push(
        createMessage(Severity.ERROR, 'Request Param issue - Poll could not be updated', 'There must be at least one candidate')
      );
    }
    if (body.candidateList.some((candidate: Candidate) => candidate.name === '')) {
      pollErrors.push(
        createMessage(Severity.ERROR, 'Request Param issue - Poll could not be updated', 'No candidate names can be empty')
      );
    }
    return pollErrors
}

