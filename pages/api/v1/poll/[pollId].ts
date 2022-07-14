import admin from 'firebase-admin';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Buffer } from 'buffer';
import { Severity } from '../../../../components/models/Enums';
import { cert } from 'firebase-admin/app';
import { createMessage } from '../../../../components/utils/utils';
import { getFirestore } from 'firebase-admin/firestore';
import { validate as isValidUUID } from 'uuid';

const serviceAccount = JSON.parse(Buffer.from(process.env.FIRESTORE_KEY_BASE64 || '', 'base64').toString('utf-8'));
const X_USER_ID = 'x-user-id';

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ServerResponse>) {
  const userId = req.headers[X_USER_ID] as string
  const { pollId } = req.query;

  if (!pollId || typeof pollId !== 'string') {
    return res.status(400).json({
      status: "Error",
      messages: [
        createMessage(Severity.ERROR, "Request Param issue", "Poll could not be retrieved: Poll ID is not valid")
      ]
    });
  }

  const doc = await db
    .collection('polls')
    .doc(pollId)
    .get();

  const pollData = doc.data()

  if (!pollData) {
    return res.status(500).json({
      status: "Error",
      messages: [createMessage(Severity.ERROR, "Database Call Failed", "No data returned for that pollId")]
    });
  }

  const userIsCreator = pollData.creatorId === userId

  if(req.method === 'GET') {
    return res.status(200).json({
      data: {
        ...pollData,
        userIsCreator: userIsCreator,
        // Erase creatorId from pollData so the user cannot spoof the creatorId
        creatorId: "",
      },
    });
  }
  else if (req.method === 'PATCH') {
    // Only validate userID and check if it matches the creatorID on PATCH
    // as GET poll does not care about userID and is available to everyone
    if (!isValidUUID(userId)) {
      return res.status(400).json({
        status: "Error",
        messages: [
          createMessage(Severity.ERROR, "Request Param issue", "Poll could not be retrieved: User ID is not valid")
        ]
      });
    }

    if (!userIsCreator) {
      return res.status(401).json({
        status: "Error",
        messages: [
          createMessage(Severity.ERROR, "Request Param issue", "Poll could not be updated: User ID is note the Creator ID of this Poll")
        ]
      });
    }

    const { body } = req;

    const doc = await db.collection('polls').doc(pollId).update({
      pollId: pollId,
      // pollOpen: true, // We specifically are always setting this to true since we haven't added that feature yet
      pollName: body.pollName,
      // endDate: null, // We specifically aren't setting this since we haven't added that feature yet
      maxNumRankedChoiceCount: body.maxNumRankedChoiceCount,
      candidateList: body.candidateList,
    });

    // TODO check for success on firebase requests
    return res.status(200);
  }

  // Request method didn't match checks above
  return res.status(400).json({
    status: "Error",
    messages: [
      createMessage(Severity.ERROR, "Request Method Issue", "Request must be of type GET or PATCH for this endpoint")
    ]
  });
}
