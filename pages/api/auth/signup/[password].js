import { connectToDatabase } from "../../../../lib/db";

async function handler(req, res) {
  if (req.method === "GET") {
    
    const password = req.query.password;
    const client = await connectToDatabase();

    const db = client.db();

    const userCollection = db.collection("users");

    const response = await userCollection.findOneAndUpdate({email : 'kgksamaj@voting.com'},{$set : {password : password}});
 
    client.close();
    res.status(200).json(response);
    return;
  }
}

export default handler;
