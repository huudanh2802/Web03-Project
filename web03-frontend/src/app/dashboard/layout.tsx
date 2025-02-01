"use client";
import { Provider } from "react-redux";
import { store } from "../../lib/store";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useGetNoteByUserIdQuery } from "@/routes/note/note";
import { useAppDispatch } from "@/lib/hook";
import { setPreviewNoteList } from "@/lib/features/noteSlice";
import AuthProvider from "@/providers/auth-provider";
import { CircleUserRound } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const userId = session?.user?.id?.toString();
  const {
    data: notes,
    error,
    isLoading,
  } = useGetNoteByUserIdQuery(userId ?? "", {
    skip: status !== "authenticated" || !userId,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPreviewNoteList(notes));
  }, [notes]);

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
