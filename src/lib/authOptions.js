import { LoginUser } from "@/actions/server/Auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await LoginUser(credentials);
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      const userCollection = await dbConnect(collections.USERS);

      const isExistUser = await userCollection.findOne({
        email: user.email,
        provider: account.provider,
      });

      if (isExistUser) {
        return true;
      }

      const newUser = {
        provider: account.provider,
        name: user.name,
        email: user.email,
        image: user.image,
        role: "user",
      };

      const result = await userCollection.insertOne(newUser);

      return result.acknowledged;
    },
  },
};
