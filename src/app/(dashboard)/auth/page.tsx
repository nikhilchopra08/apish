"use client";

import React, { useState, useCallback } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

const Auth = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (e) {
      console.log(e);
    }
  }, [email, name, password]);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "",
      });

      router.push("/generate-api-key");
    } catch (e) {
      console.log(e);
    }
  }, [email, password, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (variant === "login") {
      login();
    } else {
      register();
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen items-end pr-8 md:pr-0 md:items-center w-full">
      <div className="h-fit w-[20rem] md:w-[30rem] rounded-sm md:rounded-2xl px-4 md:p-8 shadow-input dark:bg-white bg-black">
        <h1 className="font-bold text-3xl dark:text-neutral-800 text-neutral-200">
          {variant === "login" ? "Login" : "Signup"}
        </h1>
        <form className="my-4 md:my-8" onSubmit={handleSubmit}>
          {variant === "register" && (
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Tyler Durden"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </LabelInputContainer>
            </div>
          )}

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {variant === "login" ? "Login" : "Sign up"} &rarr;
            <BottomGradient />
          </button>
        </form>

        <button
  className="text-neutral-500 flex justify-center items-center w-full"
  onClick={toggleVariant}
>
  {variant === "login"
    ? "New user? Sign up here."
    : "Already have an account? Login here."}
</button>

      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Auth;
