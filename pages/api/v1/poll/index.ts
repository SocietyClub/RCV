import type { NextApiRequest, NextApiResponse } from 'next';
import { validate as isValidUUID, v4 as uuidv4 } from 'uuid';
import { createMessage } from '../../../../utils/utils';
import { getFirestoreDB } from '../../../../utils/api-utils';
import { Severity } from '../../../../models/Enums';
import { validatePollParams } from '../../../../utils/validators';

const X_USER_ID = 'x-user-id';

const db = getFirestoreDB();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ServerResponse>) {
  if (req.method !== 'POST') {
    return res.status(400).json({
      status: 'Error',
      messages: [createMessage(Severity.ERROR, 'Request Method Issue', 'Request must be of type POST for this endpoint')],
    });
  }

  const body: CreatePollRequest = req.body;
  const userId = req.headers[X_USER_ID] as string

  if (!isValidUUID(userId)) {
    return res.status(400).json({
      status: 'Error',
      messages: [createMessage(Severity.ERROR, 'Request Param issue', 'Poll could not be created: User ID is not valid')],
    });
  }

  let pollErrors: Array<ErrorMessage> = validatePollParams(body);
  if (pollErrors.length != 0) {
    return res.status(400).json({
      status: 'Error',
      messages: pollErrors,
    });
  }

  // Generate a new ID for the Poll, maybe someday we want to use human readable words for this
  const pollId = uuidv4();

  // Cleaning the candidate list to make sure we aren't getting any non-strings or empty strings
  const sanitizedCandidateList = body.candidateList.filter(candidate => typeof candidate.name === 'string' && candidate.name.length > 0)

  const doc = await db.collection('polls').doc(pollId).set({
    pollId: pollId,
    pollOpen: true, // We specifically are always setting this to true since we haven't added that feature yet
    pollName: body.pollName,
    creatorId: userId,
    startDate: Date.now(),
    endDate: null, // We specifically aren't setting this since we haven't added that feature yet
    maxNumRankedChoiceCount: body.maxNumRankedChoiceCount,
    candidateList: sanitizedCandidateList,
  });

  return res.status(200).json({
    data: {
      pollId,
      timestamp: doc.writeTime,
    },
  });
}
