import db  from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewAvocadoPage () {
    async function handleSubmit (formValues) {
        "use server";
        const avocadoName = formValues.get("avocado_name");
        const purchaseDate = formValues.get("purchase_date");
        const firmness = formValues.get("firmness");
        const storageLocation = formValues.get("storage_location");

        db.query(
            'INSERT INTO avocados (name, purchase_date, firmness, storage_location) VALUES ($1, $2, $3, $4)',
            [avocadoName, purchaseDate, firmness, storageLocation]
        );

        revalidatePath("/dashboard");
        redirect("/dashboard");
    }


return (
    <>
    <h1> Add a new avocado </h1>
    <form action={handleSubmit}>
        <label htmlFor="avocado_name"> Name your avocado: </label>
        <input
        type="text"
        name="avocado_name"
        id="avocado_name"
        required
        />

        <label htmlFor="purchase_date"> When did you purchase your avocado: </label>
        <input
        type="date"
        name="purchase_date"
        id="purchase_date"
        required
        />

        <label htmlFor="firmness"> How does your avocado feel: </label>
        <select 
        name="firmness" 
        id="firmness"
        required>
            <option value="hard">Hard</option>
            <option value="firm">Firm</option>
            <option value="soft">Soft</option>
        </select>

        <label htmlFor="storage_location"> Where are you storing your avocado: </label>
        <select 
        name="storage_location" 
        id="storage_location"
        required>
            <option value="countertop">Countertop</option>
            <option value="fridge">Fridge</option>
        </select>
        
        <button type="submit">
            Submit your avocado!
        </button>
    </form>
    </>
)
}

