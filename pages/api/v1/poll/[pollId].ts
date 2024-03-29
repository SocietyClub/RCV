import type { NextApiRequest, NextApiResponse } from 'next';
import { Severity } from '../../../../models/Enums';
import { createMessage } from '../../../../utils/utils';
import { getFirestoreDB } from '../../../../utils/api-utils';
import { validate as isValidUUID } from 'uuid';
import { validatePollParams } from '../../../../utils/validators';

const X_USER_ID = 'x-user-id';

const db = getFirestoreDB();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ServerResponse>) {
  const userId = req.headers[X_USER_ID] as string;
  const { pollId } = req.query;

  if (!pollId || typeof pollId !== 'string') {
    return res.status(400).json({
      status: 'Error',
      messages: [createMessage(Severity.ERROR, 'Request Param issue', 'Poll could not be retrieved: Poll ID is not valid')],
    });
  }

  const pollsRef = db.collection('polls').doc(pollId);
  const votesRef = db.collection('votes').doc(pollId);
  let pollDoc;
  try {
    pollDoc = await pollsRef.get();
  } catch {
    return res.status(500).json({
      status: 'Error',
      messages: [createMessage(Severity.ERROR, 'Database Call Failed', 'No data returned for that pollId')],
    });
  }
  const pollData = pollDoc.data() as PollDB;

  const userIsCreator = pollData.creatorId === userId;

  if (req.method === 'GET') {
    const pollResponse: Poll = {
      pollId: pollData.pollId,
      pollOpen: pollData.pollOpen,
      startDate: pollData.startDate,
      endDate: pollData.endDate,
      pollName: pollData.pollName,
      maxNumRankedChoiceCount: pollData.maxNumRankedChoiceCount,
      candidateList: pollData.candidateList,
      // Replace creatorId with userIsCreator so the user cannot spoof the creatorId
      userIsCreator: userIsCreator,
    };
    return res.status(200).json({
      data: pollResponse,
    });
  }
  if (req.method === 'PATCH') {
    // Only validate userID and check if it matches the creatorID on PATCH
    // as GET poll does not care about userID and is available to everyone
    if (!isValidUUID(userId)) {
      return res.status(400).json({
        status: 'Error',
        messages: [createMessage(Severity.ERROR, 'Request Param issue', 'Poll could not be updated: User ID is not valid')],
      });
    }

    if (!userIsCreator) {
      return res.status(401).json({
        status: 'Error',
        messages: [createMessage(Severity.ERROR, 'Request Param issue', 'Poll could not be updated: User ID is not the Creator ID of this Poll')],
      });
    }

    const body: UpdatePollRequest = req.body;

    let pollErrors: Array<ErrorMessage> = validatePollParams(body);
    if (pollErrors.length != 0) {
      return res.status(400).json({
        status: 'Error',
        messages: pollErrors,
      });
    }

    // Update poll and delete it's associated votes in a batch so that the changes are atomic
    const batch = db.batch();
    batch.update(pollsRef, {
      pollId: pollId,
      // pollOpen: true, // We specifically are always setting this to true since we haven't added that feature yet
      pollName: body.pollName,
      // endDate: null, // We specifically aren't setting this since we haven't added that feature yet
      maxNumRankedChoiceCount: body.maxNumRankedChoiceCount,
      candidateList: body.candidateList,
    });

    // Delete votes associated with the poll to handle weird edgecases like, maxNumRankedChoiceCount changing, or the
    // pollOwner maliciously chaging the poll name/candidateList
    batch.delete(votesRef);

    try {
      await batch.commit();
    } catch {
      return res.status(500).json({
        status: 'Error',
        messages: [createMessage(Severity.ERROR, 'Database Call Failed', 'Could not update the poll and delete votes')],
      });
    }
    return res.status(200).json({ data: {} });
  }

  // Request method didn't match checks above
  return res.status(400).json({
    status: 'Error',
    messages: [createMessage(Severity.ERROR, 'Request Method Issue', 'Request must be of type GET or PATCH for this endpoint')],
  });
}
