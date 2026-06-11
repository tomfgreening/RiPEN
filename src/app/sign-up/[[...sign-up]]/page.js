import { SignUp } from "@clerk/nextjs";
export default function SignUpPage() {
  return (
    <>
      <h1>Welcome to RiPEN</h1>
      <h2>Please sign up to continue</h2>
      <SignUp />
    </>
  );
}