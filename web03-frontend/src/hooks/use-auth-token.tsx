import { useSession } from "next-auth/react";

export function useAuthToken() {
  const { data: session } = useSession();

  if (!session) return null;

  return session.user.accessToken;
}
