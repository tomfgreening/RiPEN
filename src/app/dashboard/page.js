import { SignOutButton } from "@clerk/nextjs";


export default function DashboardPage () {
    return(
        <>
        <h1>Welcome back, USER </h1>
        <h2>Track previous avacados, or check a new one. </h2>

        [ add avacado ]
        [ your tracked avacados ]
        [ no avacoads tracked ]
        <SignOutButton>
            <button>Sign out.</button>
        </SignOutButton>
        </>
    );
}