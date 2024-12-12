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
import { Dispatch, SetStateAction } from "react";

export default function SigninDialog({
  isSigninDialogOpen,
  setIsSigninDialogOpen,
  setIsRegistrationDialogOpen,
}: {
  isSigninDialogOpen: boolean;
  setIsSigninDialogOpen: Dispatch<SetStateAction<boolean>>;
  setIsRegistrationDialogOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={isSigninDialogOpen} onOpenChange={setIsSigninDialogOpen}>
      <DialogContent className="sm:max-w-[425px">
        <DialogHeader>
          <DialogTitle className="flex row-auto justify-center">
            Sign in
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="flex row-auto justify-center">
          <Button
            onClick={() => {
              setIsSigninDialogOpen(false);
              setIsRegistrationDialogOpen(true);
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
