import { SignOutButton } from "@clerk/nextjs";
import db from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage () {
    const { userId } = await auth();
    const avocados = await db.query('SELECT * FROM avocados');
    const wrangledAvocados = avocados.rows;
    console.log(wrangledAvocados);
        return (
        <>
        <h1>Welcome back, { userId } </h1>
        <h2>Track previous avocados, or check a new one. </h2>
         {/* avocado data to be displayed here */}
         <SignOutButton>
            <button>Sign out.</button>
        </SignOutButton></>
    );
}       