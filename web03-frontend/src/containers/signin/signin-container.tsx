"use client";
import { useState } from "react";
import CatIcon from "../../../public/icons/cat-icon";
import SigninDialog from "./signin-dialog";
import { Button } from "@/components/ui/button";
import RegistrationDialog from "./registration-dialog";
import ConfirmEmailDialog from "./confirm-email-dialog";
import { signIn } from "next-auth/react";

export default function SigninContainer() {
  const [isSigninDialogOpen, setIsSigninDialogOpen] = useState(false);
  const [isRegistrationDialogOpen, setIsRegistrationDialogOpen] =
    useState(false);
  const [isConfirmEmailDialogOpen, setIsConfirmEmailDialogOpen] =
    useState(false);

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/dashboard" });
  };

  return (
    <div className="mx-auto items-center flex flex-col">
      <div className="flex row-auto mx-auto my-16 justify-center text-4xl font-semibold">
        <h1 className="text-yellow-500">Calico</h1>
        <h1>Note</h1>
      </div>
      <CatIcon style={{ width: 172 }} />
      <Button
        className="my-4 rounded-3xl"
        onClick={() => setIsSigninDialogOpen(!isSigninDialogOpen)}
      >
        Sign in
      </Button>
      <Button
        className="my-4 rounded-3xl flex items-center"
        onClick={handleGoogleSignIn}
      >
        <img
          src="/icons/google-icon.svg"
          alt="Google"
          className="w-6 h-6 mr-2"
        />
        Sign in with Google
      </Button>
      <SigninDialog
        isSigninDialogOpen={isSigninDialogOpen}
        setIsSigninDialogOpen={setIsSigninDialogOpen}
        setIsRegistrationDialogOpen={setIsRegistrationDialogOpen}
      />

      <RegistrationDialog
        isRegistrationDialogOpen={isRegistrationDialogOpen}
        setIsRegistrationDialogOpen={setIsRegistrationDialogOpen}
        setIsConfirmEmailDialogOpen={setIsConfirmEmailDialogOpen}
      />
      <ConfirmEmailDialog
        isConfirmEmailDialogOpen={isConfirmEmailDialogOpen}
        setIsConfirmEmailDialogOpen={setIsConfirmEmailDialogOpen}
      />

      <h2 className="mt-16">
        The cross platform Apple Note altenative you have been looking for
      </h2>
    </div>
  );
}
