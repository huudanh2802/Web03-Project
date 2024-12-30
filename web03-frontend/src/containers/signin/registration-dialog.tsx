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

export default function RegistrationDialog({
  isRegistrationDialogOpen,
  setIsRegistrationDialogOpen,
  setIsConfirmEmailDialogOpen,
}: {
  isRegistrationDialogOpen: boolean;
  setIsRegistrationDialogOpen: Dispatch<SetStateAction<boolean>>;
  setIsConfirmEmailDialogOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog
      open={isRegistrationDialogOpen}
      onOpenChange={setIsRegistrationDialogOpen}
    >
      <DialogContent className="sm:max-w-[425px">
        <DialogHeader>
          <DialogTitle className="flex row-auto justify-center">
            <p className="text-3xl"> Registration</p>
          </DialogTitle>
        </DialogHeader>
        <div>
          <div className="mx-20 my-4">
            <Input
              className="bg-[#1F1F1F] placeholder:text-[#484848] rounded-2xl border-[#898989]"
              id="email"
              placeholder="Email address"
              type="email"
            />
          </div>
          <div className="mx-20 my-4">
            <Input
              className="bg-[#1F1F1F] placeholder:text-[#484848] rounded-2xl border-[#898989]"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="mx-20 my-4">
            <Input
              className="bg-[#1F1F1F] placeholder:text-[#484848] rounded-2xl border-[#898989]"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mx-20 mt-4">
            <Input
              className="bg-[#1F1F1F] placeholder:text-[#484848] rounded-2xl border-[#898989]"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <DialogFooter className="flex flex-col items-center">
          <Button
            onClick={() => {
              setIsRegistrationDialogOpen(false);
              setIsConfirmEmailDialogOpen(true);
            }}
            size="icon"
            variant="ghost"
          >
            <ArrowRightCircleIcon size={28} color="#009FFF" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
