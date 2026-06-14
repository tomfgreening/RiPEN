"use client";
import Link from "next/link";

export default function SuccessPage(){
    return(
        <>
        <h1>Your avocado has been succesfully registered!</h1>
        <Link href={"/dashboard"}>
        Return to dashboard to see your avocado.
        </Link>
        </>
    )
}