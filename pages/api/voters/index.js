import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await connectToDatabase();

    const votersCollection = await client.db().collection("voters");

    const voters = await votersCollection.find({});
    client.close();
    res.status(200).json(voters);
    return;
  } else if (req.method === "POST") {
    const client = await connectToDatabase();

    const votersCollection = await client.db().collection("voters");

    const deleteResult = votersCollection.deleteMany({})

    
  }
}

export default handler;
