import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <>
      <h1>Welcome to back to RiPEN!</h1>
      <h2>Sign in to continue</h2>
      <SignIn />
    </>
  );
}