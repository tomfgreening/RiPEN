import db from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeleteAvocadoPage({params}) {
    const slug = await params;

    async function handleDelete() {
        "use server";
         
        await db.query('DELETE FROM avocados WHERE id = $1', [slug.avocadoID,]);
        revalidatePath("/dashboard");
        redirect("/dashboard");
    }

    return (
        <>
        <h1>Delete your avocado</h1>
        <p>Delete Avocado: {slug.avocadoID}</p>
        <form action={handleDelete}>
            <button type="submit">
                Delete this avocado?
            </button>
        </form>
        </>
    );
}