import admin from 'firebase-admin';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Buffer } from 'buffer';
import { Severity } from '../../../../components/models/Enums';
import { cert } from 'firebase-admin/app';
import { createMessage } from '../../../../components/utils/utils';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(Buffer.from(process.env.FIRESTORE_KEY_BASE64 || '', 'base64').toString('utf-8'));

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ServerResponse>) {
  const { pollId } = req.query;

  if(req.method === 'GET') {
    const doc = await db
      .collection('polls')
      .doc(pollId as string)
      .get();

    const pollData = doc.data()

    if (!pollData) {
      return res.status(500).json({
        status: "Error",
        messages: [
          createMessage(Severity.ERROR, "Database Call Failed", "No data returned for that pollId")
        ]
      });

    }

    res.status(200).json({
      data: pollData,
    });
  }
  else if (req.method === 'PATCH') {
  }

  // Request method didn't match checks above
  return res.status(400).json({
    status: "Error",
    messages: [
      createMessage(Severity.ERROR, "Request Method Issue", "Request must be of type GET or PATCH for this endpoint")
    ]
  });
}
