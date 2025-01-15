"use client";
import { Provider } from "react-redux";
import { store } from "../../lib/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useGetNoteByUserIdQuery } from "@/routes/note/note";
import { useAppDispatch } from "@/lib/hook";
import { setPreviewNoteList } from "@/lib/features/noteSlice";
import AuthProvider from "@/providers/auth-provider";

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

  const router = useRouter();

  if (status !== "authenticated") {
    router.push("/");
  } else {
    dispatch(setPreviewNoteList(notes));
  }
  return (
    <div>
      <div className="flex row-auto items-end bg-[#393939] p-4">
        <div className="flex row-auto text-4xl font-semibold">
          <h1 className="text-yellow-500">Calico</h1>
          <h1 className="text-gray-100">Note</h1>
        </div>
        <div>
          <p>{session?.user?.username}</p>
        </div>
      </div>
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
