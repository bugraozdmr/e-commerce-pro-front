import { Category } from "@/types";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async () : Promise<Category[]> => {
    // caching olmasın dedim
    const response = await fetch(Url,{ cache: 'no-store' });

    return response.json();
}

export default getCategories;
