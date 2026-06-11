
import { auth } from "@clerk/nextjs/server";

export default async function UserProfilePage() {
  const { userId } = await auth();
  return (
    <>
      <h1>User profile page</h1>
      <p>{userId}</p>
    </>
  );
}