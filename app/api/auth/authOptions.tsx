import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../prisma/client";

import GoogleProvider from "next-auth/providers/google";

import bcrypt from "bcrypt";

 const  authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "Email" },
          password: { label: "Password", type: "password", placeholder: "Password" },
        },
        async authorize(credentials, req) {
          if (!credentials?.email || !credentials.password) {
            return null;
          }
  
          const user = await prisma.user.findUnique({ where: { email: credentials.email } });
          if (!user) {
            return null;
          }
  
          const passwordMatch = await bcrypt.compare(credentials.password, (user as any).hashedPassword);
          if (!passwordMatch) {
            return null;
          }
  
          // If needed, ensure the returned user object matches the expected User type
          return {
            id: String(user.id), // Convert id to string if NextAuth expects a string
            email: user.email,
            name: user.name,
            // followers: user.followers ,
            // isActive: user.isActive,
            // registeredAt: user.registeredAt,
            // Add other fields if necessary, ensuring they match the NextAuth User type
          };
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    session: {
      strategy: "jwt",
    },
  };
  export default authOptions