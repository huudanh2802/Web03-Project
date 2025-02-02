"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { store } from "../lib/store";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}
