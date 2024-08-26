import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../../prisma/client";
import  authOptions  from "../authOptions";




const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
