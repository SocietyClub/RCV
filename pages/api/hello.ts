// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  data: any
}

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


const serviceAccount = require('./firestore_prod_key.json');


initializeApp({
credential: cert(serviceAccount)
});

const db = getFirestore();



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const doc = await db.collection('polls').doc('test-do-not-deleto').get();

  res.status(200).json({
      name: 'John Does Not',
      data: doc.data()
  })
}

/*
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
*/
