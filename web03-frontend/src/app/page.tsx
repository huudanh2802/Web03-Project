"use client";
import SigninContainer from "@/containers/signin/signin-container";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
    
  return <SigninContainer />;
}
