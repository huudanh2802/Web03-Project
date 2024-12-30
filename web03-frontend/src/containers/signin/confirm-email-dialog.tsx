import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRightCircleIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function ConfirmEmailDialog({
  isConfirmEmailDialogOpen,
  setIsConfirmEmailDialogOpen,
}: {
  isConfirmEmailDialogOpen: boolean;
  setIsConfirmEmailDialogOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog
      open={isConfirmEmailDialogOpen}
      onOpenChange={setIsConfirmEmailDialogOpen}
    >
      <DialogContent className="sm:max-w-[425px">
        <DialogHeader>
          <DialogTitle className="flex row-auto justify-center">
            <p className="text-3xl"> Confirm Account</p>
          </DialogTitle>
        </DialogHeader>
        <p className="m-8">
          Your account has been created, please return to sign in
        </p>
        <DialogFooter className="flex flex-col items-center">
          <Button
            onClick={() => {
              setIsConfirmEmailDialogOpen(false);
            }}
            size="icon"
            variant="ghost"
          >
            <ArrowRightCircleIcon color="#009FFF" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
