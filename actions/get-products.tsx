import { Product } from "@/types";
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query{
    categoryId? : string;
    colorId? : string;
    sizeId? : string;
    isFeatured? : boolean;
}

const getProducts = async (query : Query) : Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url : URL,
        query : {
            colorId : query.colorId,
            sizeId : query.sizeId,
            categoryId : query.categoryId,
            isFeatured : query.isFeatured,
        },
    });

    // caching olmasın dedim
    const response = await fetch(url,{ cache: 'no-store' });

    return response.json();
}

export default getProducts;
