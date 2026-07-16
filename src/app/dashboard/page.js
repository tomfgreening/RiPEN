import { SignOutButton } from "@clerk/nextjs";
import db from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = await auth();
  const userAvocados = await db.query(
    "SELECT * FROM avocados WHERE user_id=$1",
    [userId]
  );
  const wrangledUserAvocados = userAvocados.rows;
  console.log(wrangledUserAvocados);
  

  return (
    <>
      <h1>Welcome back, {userId} </h1>
      <h2>Track previous avocados, or check a new one.</h2>
      {wrangledUserAvocados.map((renderedAvocado)=> (
        <div key={renderedAvocado.id}> 
        <h1>{renderedAvocado.name}</h1>
        <h1>{renderedAvocado.purchase_date.toLocaleDateString()}</h1>
        <h1>{renderedAvocado.firmness}</h1>
        <h1>{renderedAvocado.storage_location}</h1>
        </div>
      ))}
      <SignOutButton>
        <button>Sign out.</button>
      </SignOutButton>
    </>
  );
}
