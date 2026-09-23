import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function UserProfilePage() {
  const { userId } = await auth();
  return (
    <>
      <h1>User profile page</h1>
      <p>{userId}</p>
      <Link href="/dashboard">
    Back to Dashboard
  </Link>
  <SignOutButton>
        <button>Sign out.</button>
      </SignOutButton>
    </>
    
  );
}