import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialProvider({
      name: "Credentials",
      async authorize(credentials) {
        console.log('next auth page email ' + credentials.email)
        const client = await connectToDatabase();

        const userCollection = await client.db().collection("users");

        const user = await userCollection.findOne({ email: credentials.email });
        console.log('user ' + user)
        if (!user) {
          client.close();
          throw new Error("New User Found");
        }

        if (credentials.password !== user.password) {
          client.close();
          throw new Error("New User Found");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});
