import { Category } from "../types";


const Url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

/* burda caching yapsak fena olmazdı belli bir süreliğine */

const getCategory = async (id:string) : Promise<Category> => {
    // caching olmasın dedim
    const response = await fetch(`${Url}/${id}`,{ cache: 'no-store' });

    return response.json();
}

export default getCategory;