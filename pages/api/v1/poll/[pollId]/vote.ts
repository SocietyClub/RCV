import type { NextApiRequest, NextApiResponse } from 'next';
import { validate as isValidUUID, v4 as uuidv4 } from 'uuid';
import { createMessage } from '../../../../../utils/utils';
import { getFirestoreDB } from '../../../../../utils/api-utils';
import { Severity } from '../../../../../models/Enums';

const X_USER_ID = 'x-user-id';

const db = getFirestoreDB();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ServerResponse>) {
  if (req.method !== 'POST') {
    return res.status(400).json({
      status: 'Error',
      messages: [createMessage(Severity.ERROR, 'Request Method Issue', 'Request must be of type POST for this endpoint')],
    });
  }

  const { body }: { body: CreateVoteRequest } = req;
  const { pollId } = req.query;
  const userId = req.headers[X_USER_ID] as string;

  if (!isValidUUID(userId)) {
    return res.status(400).json({
      status: 'Error',
      messages: [createMessage(Severity.ERROR, 'Request Param issue', 'Vote could not be created: User ID is not valid')],
    });
  }

  const doc = await db
    .collection('votes')
    .doc(pollId as string)
    .set(
      {
        [userId]: body.choices,
      },
      { merge: true }
    );

  res.status(200);
}
