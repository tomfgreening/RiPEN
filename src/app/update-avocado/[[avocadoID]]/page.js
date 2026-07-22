import db from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function UpdateAvocadoPage({params}){
    const slug = await params;

    const oneAvocado = await db.query('SELECT * FROM avocados WHERE id = $1', [slug.avocadoID,]);
    console.log(oneAvocado);
    const wrangledOneAvocado = oneAvocado.rows[0];
    console.log(wrangledOneAvocado);

}