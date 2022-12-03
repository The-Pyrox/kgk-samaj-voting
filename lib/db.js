import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://poojan:poojan28@database.b597gbw.mongodb.net/kgk-samaj-voting?retryWrites=true&w=majority"
  );
  await client.db("admin").command({ ping: 1 });
  console.log("Connected successfully to server");
  return client;
}
