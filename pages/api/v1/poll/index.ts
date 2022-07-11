import admin from 'firebase-admin';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Buffer } from 'buffer';
import { getFirestore } from 'firebase-admin/firestore';
import { cert } from 'firebase-admin/app';
import { validate as isValidUUID, v4 as uuidv4 } from 'uuid';
import { createMessage } from '../../../../components/utils/utils';

const X_USER_ID = 'x-user-id';

const serviceAccount = JSON.parse(Buffer.from(process.env.FIRESTORE_KEY_BASE64 || '', 'base64').toString('utf-8'));

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ServerResponse>) {

  if (req.method !== 'POST') {
    return res.status(400).json({
      status: "Error",
      messages: [
        createMessage(Severity.ERROR, "Request Method Issue", "Request must be of type POST for this endpoint")
      ]
    });
  }

  const { body } = req;
  const userId = req.headers[X_USER_ID] as string

  if (!isValidUUID(userId)) {
    return res.status(400).json({
      status: "Error",
      messages: [
        createMessage(Severity.ERROR, "Request Param issue", "Poll could not be created: User ID is not valid")
      ]
    });
  }

  // Generate a new ID for the Poll, maybe someday we want to use human readable words for this
  const pollId = uuidv4();

  const doc = await db.collection('polls').doc(pollId).set({
    pollId: pollId,
    pollOpen: true,
    pollName: body.pollName,
    creatorId: userId,
    startDate: Date.now(),
    endDate: null, // We specifically aren't setting this on create poll since we haven't added that feature yet
    maxNumRankedChoiceCount: body.maxNumRankedChoiceCount,
    candidateList: body.candidateList,
  });

  return res.status(200).json({
    data: {
      pollId,
      timestamp: doc.writeTime
    }
  });
}
