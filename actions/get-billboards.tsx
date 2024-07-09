import { Billboard } from "../types";


const Url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

/* burda caching yapsak fena olmazdı belli bir süreliğine */

const getBillboard = async (id:string) : Promise<Billboard> => {
    // caching olmasın dedim
    const response = await fetch(`${Url}/${id}`,{ cache: 'no-store' });

    return response.json();
}

export default getBillboard;