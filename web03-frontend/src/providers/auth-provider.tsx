import { setToken } from "@/lib/features/authSlice";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user.accessToken) {
      dispatch(setToken(session.user.accessToken));
    }
  }, [session, dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
