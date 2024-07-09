import { Product } from "../types";


const Url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

/* burda caching yapsak fena olmazdı belli bir süreliğine */

const getProduct = async (id:string) : Promise<Product> => {
    // caching olmasın dedim
    const response = await fetch(`${Url}/${id}`,{ cache: 'no-store' });

    return response.json();
}

export default getProduct;