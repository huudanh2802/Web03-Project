import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { noteSlice } from "@/lib/features/noteSlice";
import { useAppDispatch } from "@/lib/hook";
import { INote } from "@/types";
import dayjs from "@/utils/dayjs";

export default function PreviewNote({
  previewNote,
  selected,
}: {
  previewNote: INote;
  selected: boolean;
}) {
  const dispatch = useAppDispatch();
  const changeSelectedNote = () => {
    dispatch(noteSlice.actions.changeSelectedNote(previewNote.id));
  };
  return (
    <div>
      <Card className={selected ? "bg-[#232938]" : ""}>
        <a
          onClick={() => changeSelectedNote()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardHeader>
            <CardTitle className="text-white truncate">
              {previewNote.note}
            </CardTitle>
            <CardDescription>
              {dayjs(previewNote.createdAt).format("DD/MM/YYYY")}
            </CardDescription>
          </CardHeader>
          {/* <CardContent>
          <p>Card Content</p>
        </CardContent> */}
          {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
        </a>
      </Card>
    </div>
  );
}
