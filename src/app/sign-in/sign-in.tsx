"use client";

import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/firebase/auth";

const buttonStyle = "bg-slate-500 mt-2 px-2 py-1 rounded-md text-slate-50";

const SignIn: React.FC = () =>  {

  const router = useRouter();

  const handleSignIn = async () => {
    const isOk = await signInWithGoogle();
    if (isOk) router.push("/dashboard");
  }

  return (
    <>
      <h1>Sign in Page</h1>
      <button className={buttonStyle} onClick={handleSignIn}>
        Sign In with Google
      </button>
    </>
  )
}

export default SignIn

