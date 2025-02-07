import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string | number | undefined;
      username?: string | undefined;
      email?: string | undefined;
      accessToken?: string | undefined;
      tokenType?: string | undefined;
    };
  }
  interface User {
    id?: string | number | undefined;
    username?: string | undefined;
    email?: string | undefined;
    accessToken?: string | undefined;
    tokenType?: string | undefined;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string | number | undefined;
    username?: string | undefined;
    email?: string | undefined;
    accessToken?: string | undefined;
    tokenType?: string | undefined;
  }
}
