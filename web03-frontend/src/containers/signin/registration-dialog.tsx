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
import { SignupFormInputs } from "@/interfaces";
import { ArrowRightCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function RegistrationDialog({
  isRegistrationDialogOpen,
  setIsRegistrationDialogOpen,
  setIsConfirmEmailDialogOpen,
}: {
  isRegistrationDialogOpen: boolean;
  setIsRegistrationDialogOpen: Dispatch<SetStateAction<boolean>>;
  setIsConfirmEmailDialogOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setError,
    watch,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const handleSignup: SubmitHandler<SignupFormInputs> = async (values) => {
    try {
      const signUpRequest = {
        username: values.username,
        password: values.password,
        email: values.email,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUpRequest),
        }
      );
      if (res.ok) {
        setIsRegistrationDialogOpen(false);
        setIsConfirmEmailDialogOpen(true);
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "An error occurred");
      }
    } catch (e) {
      setError("root", { type: "custom", message: e.message });
    }
  };
  return (
    <Dialog
      open={isRegistrationDialogOpen}
      onOpenChange={setIsRegistrationDialogOpen}
    >
      <DialogContent className="sm:max-w-[425px">
        <form className="mt-5 space-y-6" onSubmit={handleSubmit(handleSignup)}>
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
                {...register("email", {
                  required: "Email is required",
                })}
              />
              <span className="text-red-500 text-xs">
                {errors.email?.message}
              </span>
            </div>
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
            <div className="mx-20 my-4">
              <Input
                className="bg-[#1F1F1F] placeholder:text-[#484848] rounded-2xl border-[#898989]"
                id="password"
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              <span className="text-red-500 text-xs">
                {errors.password?.message}
              </span>
            </div>
            <div className="mx-20 mt-4">
              <Input
                className="bg-[#1F1F1F] placeholder:text-[#484848] rounded-2xl border-[#898989]"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) => {
                    return (
                      value === watch("password") || "Password does not match"
                    );
                  },
                })}
              />
              <span className="text-red-500 text-xs">
                {errors.confirmPassword?.message}
              </span>
            </div>
          </div>
          <DialogFooter className="flex flex-col items-center">
            <Button type="submit" size="icon" variant="ghost">
              <ArrowRightCircleIcon size={28} color="#009FFF" />
            </Button>
            <span className="text-red-500 text-xs">{errors.root?.message}</span>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
