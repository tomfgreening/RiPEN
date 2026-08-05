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
    const avocadoName = formData.get("avocado_name");
    const avocadoPurchasedate = formData.get("purchase_date");
    const avocadoFirmness = formData.get("firmness");
    const avocadoStorageplace = formData.get("storage_location");

    await db.query(
      'UPDATE avocados SET name = $1, purchase_date = $2, firmness = $3, storage_location = $4 WHERE id = $5',
      [avocadoName, avocadoPurchasedate, avocadoFirmness, avocadoStorageplace, slug.avocadoID]
    );
    revalidatePath("/dashboard");
    redirect("/dashboard");
  }
  console.log(slug);
  console.log(oneAvocado.rows);
  console.log(wrangledOneAvocado);
  
  return (
    <>
    <h1>Update your avocado </h1>
    <p> Editing Avocado: {slug.avocadoID}</p>

    <form action={handleUpdate}>
    <label htmlFor="avocado_name"> Name your avocado: </label>
        <input type="text" name="avocado_name" id="avocado_name" required defaultValue={wrangledOneAvocado.name}/>

        <label htmlFor="purchase_date">
          {" "}
          When did you purchase your avocado:{" "}
        </label>
        <input type="date" name="purchase_date" id="purchase_date" required defaultValue={wrangledOneAvocado.purchase_date} />

        <label htmlFor="firmness"> How does your avocado feel: </label>
        <select name="firmness" id="firmness" required defaultValue={wrangledOneAvocado.firmness}>
          <option value="hard">Hard</option>
          <option value="firm">Firm</option>
          <option value="soft">Soft</option>
        </select>

        <label htmlFor="storage_location">
          {" "}
          Where are you storing your avocado:{" "}
        </label>
        <select name="storage_location" id="storage_location" required defaultValue={wrangledOneAvocado.storage_location}>
          <option value="countertop">Countertop</option>
          <option value="fridge">Fridge</option>
        </select>
        <button type="submit">
          Edit your avocado
        </button>
    </form>
    </>
  );
}
