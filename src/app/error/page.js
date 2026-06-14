"use client";
import Link from "next/link";

export default function Error({ error, reset}) {
    return(
         <>
    <h1> An error occurred, please try again.</h1>
    <p>{error.message}</p>
    <button onClick={() => reset()}>
        Try again
    </button>
    <Link href={"/dashboard"}>
        Return to dashboard
    </Link>
    </>
    )
   }
