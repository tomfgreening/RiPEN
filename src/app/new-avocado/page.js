import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewAvocadoPage () {
    async function handleSubmit (formValues) {
        "use server";
    }
}

return (
    <>
    <h1>Add a new avocado </h1>
    <form action={handleSubmit}>
        <label htmlFor="avocado_name"> Name your avocado: </label>
        <input
        type="text"
        name="name"
        id="name"
        />

        <label htmlFor="purchase_date"> When did you purchase your avocado: </label>
        <input
        type="date"
        name="purchase_date"
        id="purchase_date"
        />

        <label htmlFor="firmness"> How does your avocado feel: </label>
        <input
        type="select"
        name="firmness"
        id="firmness"
        />
        <select name="firmness" id="firmness">
            <option value="hard">Hard</option>
            <option value="firm">Firm</option>
            <option value="soft">Soft</option>
        </select>

        <label htmlFor="storage_location"> Where are you storing your avocado: </label>
        <input
        type="select"
        name="storage_location"
        id="storgae_location"
        />
        <select name="storage_location" id="storage_location">
            <option value="countertop">Countertop</option>
            <option value="fridge">Fridge</option>
        </select>
        
        <button type="submit">
            Submit your avocado!
        </button>
    </form>
    </>
)