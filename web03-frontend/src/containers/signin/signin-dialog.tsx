"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LoginFormInputs } from "@/types";
import { ArrowRightCircleIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const handleEmailLogin: SubmitHandler<LoginFormInputs> = async (values) => {
    const res = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });
    if (!res?.ok) {
      setError("root", { type: "custom", message: "Cannot find this account" });
    } else {
      router.push("/dashboard");
    }
  };
  return (
    <Dialog open={isSigninDialogOpen} onOpenChange={setIsSigninDialogOpen}>
      <DialogContent>
        <form
          className="mt-5 space-y-6"
          onSubmit={handleSubmit(handleEmailLogin)}
        >
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
                {...register("username", {
                  required: "Username is required",
                })}
              />
              <span className="text-red-500 text-xs">
                {errors.username?.message}
              </span>
            </div>
            <div className="mx-20">
              <Input
                {...register("password", { required: "Password is required" })}
                className="bg-[#1F1F1F] placeholder:text-[#484848] rounded-2xl border-[#898989]"
                id="password"
                type="password"
                placeholder="Password"
              />
              <span className="text-red-500 text-xs">
                {errors.password?.message}
              </span>
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
            <Button type="submit" size="icon" variant="ghost">
              <ArrowRightCircleIcon color="#009FFF" />
            </Button>
            <span className="text-red-500 text-xs">{errors.root?.message}</span>
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
        </form>
      </DialogContent>
    </Dialog>
  );
}
