import db from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function UpdateAvocadoPage({ params }) {
  const slug = await params;

  const oneAvocado = await db.query("SELECT * FROM avocados WHERE id = $1", [
    slug.avocadoID,
  ]);
  console.log(oneAvocado);
  const wrangledOneAvocado = oneAvocado.rows[0];
  console.log(wrangledOneAvocado);

  async function handleUpdate(formData) {
    "use server";
    const avocadoName = formData.get("name");
    const avocadoPurchasedate = formData.get("purchase_date");
    const avocadoFirmness = formData.get("firmness");
    const avocadoStorageplace = formData.get("storage_location");

    await db.query(
      'UPDATE avocados SET name = $1, purchase_date = $2, firmness = $3, storage_location = $4 WHERE id = $5',
      [avocadoName, avocadoPurchasedate, avocadoFirmness, avocadoStorageplace, slug.avocadoID]
    );
    revalidatePath("/dashboard");
    redirect("dashboard");
  }ç
}
