import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { INote } from "@/interfaces";
import { noteSlice } from "@/lib/features/note/noteSlice";
import { useAppDispatch } from "@/lib/hook";

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
            <CardDescription>{previewNote.date}</CardDescription>
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
