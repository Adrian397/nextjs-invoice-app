import connectMongoDB from "@/database/connection";
import Users, { UserType } from "@/model/schema";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req): Promise<UserType | null> {
        connectMongoDB().catch((err) => {
          error: "Connection failed!";
        });

        const result = await Users.findOne({ email: credentials?.email });
        if (!result) {
          throw new Error("Wrong email or password");
        }

        if (credentials) {
          const comparePassword = await compare(
            credentials.password,
            result.password
          );

          // incorrect password
          if (!comparePassword || result.email !== credentials.email) {
            throw new Error("Wrong email or password");
          }
        }

        return result;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
