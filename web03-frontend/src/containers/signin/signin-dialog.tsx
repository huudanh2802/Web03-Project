"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowBigLeft, ArrowLeft, ArrowRightCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  return (
    <Dialog open={isSigninDialogOpen} onOpenChange={setIsSigninDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex row-auto justify-center">
            <p className="text-3xl">Sign in</p>
          </DialogTitle>
        </DialogHeader>
        <div>
          <div className="mx-20 my-4">
            <Input
              className="bg-[#1F1F1F] placeholder:text-[#484848] rounded-2xl border-[#898989]"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="mx-20">
            <Input
              className="bg-[#1F1F1F] placeholder:text-[#484848] rounded-2xl border-[#898989]"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mx-20 my-4 flex flex-row gap-2 justify-center">
            <Checkbox id="rememberMe" />
            <label
              htmlFor="rememberMe"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Keep me signed in
            </label>
          </div>
        </div>
        <DialogFooter className="flex flex-col items-center">
          <Button
            onClick={() => {
              setIsSigninDialogOpen(false);
              router.push("/dashboard");
            }}
            size="icon"
            variant="ghost"
          >
            <ArrowRightCircleIcon color="#009FFF" />
          </Button>
          <Button
            onClick={() => {
              setIsSigninDialogOpen(false);
              setIsRegistrationDialogOpen(true);
            }}
            variant="link"
          >
            <p className="text-[#3471FF]">Create a new account</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
