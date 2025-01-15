import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials?.username || !credentials?.password) {
            return null;
          }
          const loginRequest = {
            username: credentials.username,
            password: credentials.password,
          };
          const user = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },  
              body: JSON.stringify(loginRequest),
            }
          ).then((res) => {
            if (!res.ok) return null;
            return res.json();
          });
          if (user) {
            return {
              ...user,
            };
          } else {
            return null;
          }
        } catch (error) {
          throw new Error(
            JSON.stringify({ errors: "Authorize error", status: false })
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async signIn(userDetail) {
      if (Object.keys(userDetail).length === 0) {
        return false;
      }
      return true;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token;
      }
      return session;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
});

export { handler as GET, handler as POST };
