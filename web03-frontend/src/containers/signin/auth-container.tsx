"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "authenticated" && pathname !== "/dashboard")
      router.push("/dashboard");
    else if (status === "unauthenticated" && pathname !== "/") router.push("/");
  }, [router, status, session, pathname]);

  return <>{children}</>;
}
