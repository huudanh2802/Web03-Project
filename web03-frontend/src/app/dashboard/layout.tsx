"use client";
import { Button } from "@/components/ui/button";
import { setPreviewNoteList } from "@/lib/features/noteSlice";
import { useAppDispatch } from "@/lib/hook";
import { useGetNoteByUserIdQuery } from "@/routes/note/note";
import { CircleUserRound } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const userId = session?.user?.id?.toString();
  const { data: notes } = useGetNoteByUserIdQuery(userId ?? "", {
    skip: status !== "authenticated" || !userId,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPreviewNoteList(notes));
  }, [dispatch, notes]);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
  }, [router, status, session]);

  return (
    <div className="overflow-hidden max-h-[680px] ">
      <div className="flex row-auto items-center justify-between bg-[#393939] p-4">
        <div className="flex row-auto text-4xl font-semibold">
          <h1 className="text-[#dd7878]">Calico</h1>
          <h1 className="text-[#e6e9ef]">Note</h1>
        </div>
        <div>
          <CircleUserRound size={36} />
        </div>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
      {children}
    </div>
  );
}
