"use client";
import SigninContainer from "@/containers/signin/signin-container";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  return <SigninContainer />;
}
