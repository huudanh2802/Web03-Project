"use client";
import SigninContainer from "@/containers/signin/signin-container";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(status);
    console.log(session);
    if (status === "authenticated") router.push("/dashboard");
  }, [router, status, session]);

  return <SigninContainer />;
}
