"use client";
import { Button } from "@/components/ui/button";
import { setPreviewNoteList } from "@/lib/features/noteSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { store } from "@/lib/store";
import { useGetNoteByUserIdQuery } from "@/routes/note/note";
import { IGetNoteByUser } from "@/types";
import { CircleUserRound } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useMemo } from "react";
import { Provider } from "react-redux";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();

  const noteValue = useAppSelector((state) => state.note);

  const getNoteReq = useMemo<IGetNoteByUser>(
    () => ({
      userId: session?.user?.id?.toString() ?? "",
      page: noteValue.page,
      keyword: noteValue.keyword,
    }),
    [noteValue.keyword, noteValue.page, session?.user?.id]
  );

  const { data: notes, refetch } = useGetNoteByUserIdQuery(getNoteReq, {
    skip: status !== "authenticated",
  });

  useEffect(() => {
    if (getNoteReq) {
      refetch();
    }
  }, [getNoteReq, refetch]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPreviewNoteList(notes));
  }, [dispatch, notes]);

  return (
    <Provider store={store}>
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
    </Provider>
  );
}
