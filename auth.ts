import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthConfig } from "next-auth";
import { prisma } from "@/db/index";
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts-edge";
import { NextResponse } from "next/server";
//import { hash } from "@/lib/encrypt";

export const config: NextAuthConfig = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hours
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        try {
          if (credentials == null) return null;

          const email = credentials.email;
          const password = credentials.password;
          if (!email || !password) return null;

          const user = await prisma.user.findFirst({
            where: { email: email },
          });

          if (!user || !user.password) return null;

          const isMatch = compareSync(
            credentials.password as string,
            user.password
          );
          if (!isMatch) return null;

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, user, trigger, token }: any) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.name = token.name;

      if (trigger === "update") {
        session.user.name = user.name;
      }

      return session;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, user }: any) {
      if (!user) return token;

      token.role = user.role;
      if (user.name !== "NO_NAME") return token;

      token.name = user.email!.split("@")[0];

      await prisma.user.update({
        where: { id: user.id },
        data: { name: token.name },
      });

      return token;
    },
    authorized({ request }) {
      if (!request.cookies.get("sessionCartID")) {
        const scID = crypto.randomUUID();
        const newRequestHeaders = new Headers(request.headers);
        const resp = NextResponse.next({
          request: {
            headers: newRequestHeaders,
          },
        });

        resp.cookies.set("sessionCartID", scID);
        return resp;
      } else {
        return true;
      }
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
