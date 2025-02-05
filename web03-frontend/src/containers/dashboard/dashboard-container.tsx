"use client";
import { setPreviewNoteList } from "@/lib/features/noteSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { useGetNoteByUserIdQuery } from "@/routes/note/note";
import { IGetNoteByUser } from "@/types";
import { useEffect, useMemo, useState } from "react";
import Note from "./note";
import Sidebar from "./sidebar";
import { useSession } from "next-auth/react";

export default function DashboardContainer() {
  const { data: session, status } = useSession();
  const noteValue = useAppSelector((state) => state.note);

  const [initialFetchDone, setInitialFetchDone] = useState(false);

  const getNoteReq = useMemo<IGetNoteByUser>(
    () => ({
      userId: session?.user?.id?.toString() ?? "",
      size: noteValue.size,
      keyword: noteValue.keyword,
    }),
    [noteValue.keyword, noteValue.size, session?.user?.id]
  );

  const {
    data: notesData,
    refetch,
    status: reqStatus,
  } = useGetNoteByUserIdQuery(getNoteReq, {
    skip: status !== "authenticated",
  });
  useEffect(() => {
    if (reqStatus === "fulfilled" && !initialFetchDone) {
      setInitialFetchDone(true);
    }
  }, [reqStatus, initialFetchDone]);

  useEffect(() => {
    if (initialFetchDone) {
      refetch();
    }
  }, [getNoteReq, refetch, initialFetchDone]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPreviewNoteList(notesData));
  }, [dispatch, notesData]);

  return (
    <div className=" grid grid-cols-12 gap-4 divide-x-2 divide-stone-600 ">
      <div className="col-span-3 mt-4 mx-4">
        <Sidebar reqStatus={reqStatus} />
      </div>
      <div className="col-span-9">
        <Note />
      </div>
    </div>
  );
}
